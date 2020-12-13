# regex - <g[\s\S]*?id="([\s\S]*?)"[\s\S]*?width="([\s\S]*?)"[\s\S]*?height="([\s\S]*?)"[\s\S]*?transform="([\s\S]*?)"[\s\S]*?<\/g>
import re
import os

introText = "Careful of the background file, that shouldn't be copied over!!\n\n\n"

regexString = r'<g[\s\S]*?id="([\s\S]*?)"[\s\S]*?width="([\s\S]*?)"[\s\S]*?height="([\s\S]*?)"[\s\S]*?transform="([\s\S]*?)"[\s\S]*?</g>'
fileString = ""
with open("test.svg") as f:
    for line in f:
        fileString += line

data = re.findall(regexString, fileString, re.MULTILINE)

writeString = ""+introText

for a in data:
    writeString += f'{{getSVGLocationGroup("{a[0]}", {a[1]}, {a[2]}, "{a[3]}", IMAGELINK)}}\n'

try:
    os.remove("output")
except OSError:
    pass

with open("output", 'a') as outputFile:
    outputFile.write(writeString)