"""
This script read the SVG to produce an output file. This is not some generic script but a customized script, use case is limited to this app rn.

It accepts input as the first argument and output as the second argument.

regex being used rn - <g[\s\S]*?id="([\s\S]*?)"[\s\S]*?width="([\s\S]*?)"[\s\S]*?height="([\s\S]*?)"[\s\S]*?transform="([\s\S]*?)"[\s\S]*?<\/g>
"""
import re
import os
import sys

introText = "Careful of the background file, that shouldn't be copied over!!\n\n\n"
regexString = r'<g[\s\S]*?id="([\s\S]*?)"[\s\S]*?width="([\s\S]*?)"[\s\S]*?height="([\s\S]*?)"[\s\S]*?transform="([\s\S]*?)"[\s\S]*?</g>'


def parseSVG(input="test.svg", output="output"):
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
    fileString = ""

    try:
        with open(input) as f:
            print("Reading SVG")
            for line in f:
                fileString += line
    except Exception as e:
        print(e)
        return

    data = re.findall(regexString, fileString, re.MULTILINE)
    writeString = ""+introText

    for a in data:
        writeString += f'{{getSVGLocationGroup("{a[0]}", {a[1]}, {a[2]}, "{a[3]}", IMAGELINK)}}\n'

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
        parseSVG()
    elif(len(sys.argv) == 2):
        parseSVG(input=sys.argv[1])
    elif(len(sys.argv) == 3):
        parseSVG(input=sys.argv[1], output=sys.argv[2])
    elif(len(sys.argv) >= 3):
        print("Ignoring extra args")
        parseSVG(input=sys.argv[1], output=sys.argv[2])


if __name__ == "__main__":
    main()
