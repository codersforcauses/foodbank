#!/usr/bin/env python3
"""
This script read the SVG to produce a JSON. This is not some generic script but a customized script, use case is limited to this app rn.

It accepts input as the first argument and output as the second argument.
"""
__author__ = "Neosh Sheikh (@neosh11)"
__license__ = "MIT"
__version__ = "0.0.0.1"
__maintainer__ = "None"

import os
import sys
from xml.dom.minidom import parse


def getChildrenByTagName(node, tagName):
    """
        Parameters
        ----------
        node : xmlnode
            the xml element
        tagName : str
            tag to look for

        returns
        ---------
        stuff 
    """
    for child in node.childNodes:
        if child.nodeType == child.ELEMENT_NODE and (tagName == '*' or child.tagName == tagName):
            yield child


def parseSVGAndCreateFile(input="test.svg", output="output.json"):
    """Produces an output file based on a input SVG file.
        This is a highly customized function at the moment and only does 1 thing.

        If the argument `input` isn't passed in, "test.svg" is used as input.

        If the argument `output` isn't passed in, "output" is used as output.

        Parameters
        ----------
        input : str
            The name of the input file
        output : str
            The name of the output file
    """
    data = []

    try:
        doc = parse(input)

        for svg in doc.getElementsByTagName('svg'):
            gTags = getChildrenByTagName(svg, 'g')
            for a in gTags:
                id = he = wi = tr = xl = None
                if(a.getAttribute("id")):
                    id = a.getAttribute("id")
                img = a.getElementsByTagName("image")
                if(img.length > 0):
                    he = img[0].getAttribute("height")
                    wi = img[0].getAttribute("width")
                    tr = img[0].getAttribute("transform")
                    xl = ' '.join(word[0].upper() + word[1:]
                                  for word in id.split())
                if(id and he and wi and tr and xl):
                    data.append((id, wi, he, tr, xl))
        doc.unlink()

    except Exception as e:
        print(e)
        return

    # JSON
    writeString = """
    {
        "groupArray": [

    """

    for a in data:
        writeString += f'{{ "id":"{a[0]}", "width":"{a[1]}", "height":"{a[2]}", "transform":"{a[3]}", "xlinkHref":"{a[4]}" }},\n'

    writeString += """
            ]
    }
        """

    try:
        os.remove(output)
    except OSError:
        pass

    with open(output, 'a') as outputFile:
        print("Writing output")
        outputFile.write(writeString)
        print("Done")

    # MAP

    writeString = """
    const assetMap = {

    """

    for a in data:
        writeString += f'{a[0]}:{"%s%s" % (a[0][0].upper(), a[0][1:])} ,\n'

    writeString += """
    }
"""

    try:
        os.remove("assetMap.ts")
    except OSError:
        pass

    with open("assetMap.ts", 'a') as outputFile:
        print("Writing map")
        outputFile.write(writeString)
        print("Done")


def main():
    if(len(sys.argv) == 1):
        parseSVGAndCreateFile()
    elif(len(sys.argv) == 2):
        parseSVGAndCreateFile(input=sys.argv[1])
    elif(len(sys.argv) == 3):
        parseSVGAndCreateFile(input=sys.argv[1], output=sys.argv[2])
    elif(len(sys.argv) >= 3):
        print("Ignoring extra args")
        parseSVGAndCreateFile(input=sys.argv[1], output=sys.argv[2])


if __name__ == "__main__":
    main()
