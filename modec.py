import os
import datetime
import random

message = ['add new files','add new method', 'set new data', 'update new file', 'remake new']

while True:
    value = message[random.randint(1, 5)] 
    os.system('git add .')
    os.system('git status')
    os.system(f'git commit -m "{value}"')
    os.system('git push')
    print(f"Last Commit : {datetime.datetime.now()}")