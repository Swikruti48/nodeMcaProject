import sys
import webbrowser


print(sys.argv[1])

text_file = open(r'read.txt', 'r+')
my_string = sys.argv[1]
old_string = text_file.read()
text_file.write('\n'+my_string+" <br>")
text_file.close()