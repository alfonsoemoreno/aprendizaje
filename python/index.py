# Acá va un comentario
if 3 > 5: # Acá va un comentario
    print('Esto no se va a imprimir')

if 5 > 3: 
    # print('5 es mayor a 3')

    x = 5
    y = 'chanchito feliz'
    # print(x, y)

    email = 'chanchito@feliz.com'
    # print(email)

    miVar = 'chanchito'

# Multiples variables
a, b, c = 'Lala', 'Lele', 'Lili'
# print(a, b, c)

valor1 = valor2 = valor3 = 'chanchito feliz'
# print(valor1, valor2, valor3)

# Concatenación
inicio = 'Hola '
final = 'mundo'
# print(inicio +  final)

# Tipos de datos
# String
palabra = 'Esto es un string' #string
otraPalabra = "Esto tambien es un string con comilla doble" #string

# Numeros
entero = 20 #integer
numeroTipoFloat = 20.2 #float
complejo = 1j 

# print(palabra, otraPalabra, entero, numeroTipoFloat, complejo)

# Listas
lista = ['Hola', 'mundo', 'Chanchito']
lista2 = lista.copy()
lista.append(4)
lista.append(5)
# lista.clear()

# print(lista, lista2.count(3))
# print(len(lista), len(lista2))

# print(lista[1])
lista.pop() # Elimina el último elemento de una lista
# lista.pop()

lista.remove('mundo') # Elimina elemento en particular por su valor
# print(lista)

lista.append('Xylofono')
lista.append('Alfonso')
lista.remove(4)
lista.reverse()
lista.sort() # Tienen que ser del mismo tipo de datos

tupla = ('Hola', 'mundo', 'somos', 'tupla') # En las tuplas se pueden usarse los métodos de count() e index() no se puede append() porque las tuplas no se pueden modificar

listaDesdeTupla = list(tupla)
# print(tupla.count('mundo'), tupla.index('somos'), tupla[2])
listaDesdeTupla.append('Juanito')
# print(listaDesdeTupla)

# Rangos: Permite definir un rango de numeros. Se utilizarán en las iteraciones
rango = range(6) 
# print(rango)

# Diccionarios
diccionario = {
    "nombre": "Chanchito feliz",
    "raza": "Persa",
    "edad": 5
}

# print(diccionario)
# print(diccionario['nombre'])
# print(diccionario.get('raza'))

# Cambiar los valores del diccionario
diccionario['nombre'] = 'Fluffy'

# print(len(diccionario))

# Agregar valor al diccionario
diccionario['ronronea'] = 'Si'
# print(diccionario)

# Eliminar valor de diccionario 
# diccionario.pop('ronronea') # Elimina un elemento específico
# diccionario.popitem() # Elimina el último valor agregado al diccionario
del diccionario['ronronea'] # Elimina un valor específico
# print(diccionario)

#Copiar un diccionario
copiaGatito = diccionario.copy()
# copiaGatito = dict(diccionario) # Otra forma de copiar un diccionario
diccionario['Cola'] = 'Si'

# Elimina todos los elementos de un diccionario
copiaGatito.clear()

# print(diccionario, copiaGatito)

# Diccionarios anidados
# gatitos = {
#     "Fluffy": {
#         "nombre": "Fluffy",
#         "edad": 4
#     },
#     "Mamba": {
#         "nombre": "Black Mamba",
#         "edad": 12
#     }
# }

fluffy = {
        "nombre": "Fluffy",
        "edad": 4
    }

mamba = {
        "nombre": "Black Mamba",
        "edad": 12
    }

gatitos = {
    "Fluffy": fluffy,
    "Mamba": mamba
}

# print(gatitos)

perritos = dict(nombre = "Chanchito feliz", edad = 4)
# print(perritos)

# Boolean
verdadero = True
falso = False
print(verdadero, falso)
