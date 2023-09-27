# help(str.split)

cursos = 'Java JavaScript Node Python Diseno'
lista = cursos.split()
print(f'Lista de cursos: {lista}')
print(type(lista))

cursos_separados_coma = 'Java, JavaScript, Python, Node, Spring'
lista_cursos = cursos_separados_coma.split(',', 2)
print(f'Lista de cursos: {lista_cursos}')
print(len(lista_cursos))