from nbformat import read, write

problem_file_name = 'cmdk.ipynb'
save_file_name = 'new.ipynb'

def strip_output(nb):
    for cell in nb.cells:
        if hasattr(cell, "outputs"):
            cell.outputs = []
        if hasattr(cell, "prompt_number"):
            del cell["prompt_number"]
            
nb = read(open(problem_file_name, encoding = 'utf8'), 4)
strip_output(nb)
write(nb, open(save_file_name, "w", encoding = 'utf8'), 4)