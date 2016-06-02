labels = open("Classroom_Labels.csv", "r")
f = open("EngagementReport.csv", "r")
output = open("output.js", "r+")

program_data = []
for line in labels:
    program_names = line.split(",")
    program_data.append([[program_names[0].rstrip(), program_names[1].rstrip()], []])

for line in f:
    if line == "\n":
        break
    new_line = line.split(",")
    new_new_line = []
    for elem in new_line:
        new_new_line.append(elem.strip('"'))
    new_line = new_new_line
    for row in program_data:
        temp = row[0][0]
        if new_line[1] == temp:
            speaker = ""
            start = False
            count = 0
            for char in new_line[0]:
                if start:
                    if char == "'":
                        speaker += "\\'"
                    else:
                        speaker += char
                if char == "-":
                    count += 1
                if count == 2:
                    start = True
                    count = 0
            speaker = speaker.strip()
            row[1].append(speaker)

for i in range(len(program_data)):
    line = "\t\t{{id: {}, text: '{}', speakers: [".format(i, program_data[i][0][1])
    for j in range(len(program_data[i][1])):
        line += "\n\t\t\t\t{{id: {}, text: '{}'}}".format(j, program_data[i][1][j])
        #if j != len(program_data[i][1]) - 1:
        line += ","
    line += "\n\t\t\t\t{{id: {}, text: 'Other'}}".format(len(program_data[i][1]))
    line += "\n\t\t]},\n"
    output.write(line)
