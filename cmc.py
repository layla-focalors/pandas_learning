import os

while True:
    os.system('git add .')
    os.system('git status')
    value = str(input('input your commit message : '))
    if(value == 'exit'):
        break
    os.system(f'git commit -m "{value}"')
    os.system('git push')