f = open("../SIP_Classroom_Names.csv", "r")
output = open("../SIP_Classroom_javscript.txt", "r+")

index = 0
output.write("[")

for line in f:
    entries = line.split(",")
    entries[1] = entries[1].rstrip()
    if entries[1] == "Moody's":
        entries[1] = "Moody\\'s"
    output.write("{{ id: {}, text: '{}' }}, ".format(index, entries[1]))
    index += 1
    if index % 3 == 0 and index != 0:
        output.write("\n")

output.write("]")
