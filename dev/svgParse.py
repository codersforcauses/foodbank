#!/usr/bin/env python3
"""
This script read the SVG to produce an output file. This is not some generic script but a customized script, use case is limited to this app rn.

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


def parseSVGAndCreateFile(input="test.svg", output="output.tsx"):
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
            gTags=getChildrenByTagName(svg, 'g')
            for a in gTags:
                id = he = wi = tr = xl= None
                if(a.getAttribute("id")):
                    id = a.getAttribute("id")
                img = a.getElementsByTagName("image")
                if(img.length>0):
                    he = img[0].getAttribute("height")
                    wi = img[0].getAttribute("width")
                    tr = img[0].getAttribute("transform")
                    xl = ' '.join(word[0].upper() + word[1:] for word in id.split())
                if( id and he and wi and tr and xl):
                    data.append((id, wi, he, tr, xl))
        doc.unlink()

    except Exception as e:
        print(e)
        return

    
    writeString = """
    // Put this inside the map component

    const getClassname = (area: Location) => {
        if (area === selected) {
            return 'map-selected';
        } else {
            return 'map-unselected';
        }
    }

    const onMapClick = (area: Location) => {
        console.log(area);
        if (selected === area) {
            onSelect(null);
        } else {
            onSelect(area);
        }
    }

    const getSVGLocationGroup = (name: Location, width: number, height: number, transform: string, image: string) => {
        return (
            <g id={name} onClick={() => onMapClick(name)}>
                <g transform={transform}>
                    <image width={width} height={height} className={getClassname(name)} xlinkHref={image} />
                </g>
            </g>
        )
    }

    // Data can be made from dev/svgParse.py

    return (
        <div className="svgrow">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 490.56" height={height} overflow="scroll">
    """

    for a in data:
        if(a[0] == "bg"):
            writeString += f'<g id="{a[0]}"><image width="{a[1]}" height="{a[2]}" transform="{a[3]}" xlinkHref={{{a[4]}}}/></g>\n'
        else:
            writeString += f'<SVGLocationGroup name={{"{a[0]}"}} width={{{a[1]}}}  height={{{a[2]}}} transform="{a[3]}" image={{{a[4]}}} className={{ getClassname("{a[0]}") }}  onClick={{onMapClick}}  />\n'

    
    writeString+="""
            </svg>
        </div>
    );"""
    try:
        os.remove(output)
    except OSError:
        pass

    with open(output, 'a') as outputFile:
        print("Writing output")
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
