# Bool contiene los valores True y False
# Los tipos numéricos, es False para el 0 y True para los demás valores

valor = 0
resultado = bool(valor)
print(f'valor: {valor}, resultado: {resultado}')

valor = -1
resultado = bool(valor)
print(f'valor: {valor}, resultado: {resultado}')

# Tipo string -> False '' (cadena vacía), True para los demas valores
valor = ''
resultado = bool(valor)
print(f'valor: {valor}, resultado: {resultado}')

valor = 'Hola'
resultado = bool(valor)
print(f'valor: {valor}, resultado: {resultado}')

# Tipo colecciones -> False para colecciones vacías, True para todas las demás colecciones
# Lista
valor = []
resultado = bool(valor)
print(f'valor de lista vacía: {valor}, resultado: {resultado}')

valor = [2, 5 , 8]
resultado = bool(valor)
print(f'valor de lista con elementos: {valor}, resultado: {resultado}')

# Tupla
valor = ()
resultado = bool(valor)
print(f'valor de tupla vacía: {valor}, resultado: {resultado}')

valor = (1,)
resultado = bool(valor)
print(f'valor de tupla con elementos: {valor}, resultado: {resultado}')

# Diccionario
valor = {}
resultado = bool(valor)
print(f'valor de diccionario vacío: {valor}, resultado: {resultado}')

valor = {'Nombre':'Juan', 'Apellido': 'Perez'}
resultado = bool(valor)
print(f'valor de diccionario con elementos: {valor}, resultado: {resultado}')

# Sentencias de control
if bool(''):
    print('Regrsa verdadero')
else:
    print('Regresa falso')

# Ciclos
variable = 17
while variable:
    print('Regrsa verdadero')
    break
else:
    print('Regresa falso')
