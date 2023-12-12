import os
import datetime

while True:
    value = str(input('input your commit message : '))
    if(value == 'exit'):
        break
    os.system('git add .')
    os.system('git status')
    os.system(f'git commit -m "{value}"')
    os.system('git push')
    print(f"Last Commit : {datetime.datetime.now()}")