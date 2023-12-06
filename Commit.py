import os

os.system('git add .')
os.system('git status')
os.system(f'git commit -m "{str(input("input commit message : "))}"')
os.system('git push')