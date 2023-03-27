import sys
import webbrowser


print(sys.argv[1])
print(sys.argv[2])

if sys.argv[1] == "swikrutisar2000@gmail.com" and sys.argv[2] == "liti":
    print("done")
    webbrowser.open('http://google.com')
else:
    print("error")