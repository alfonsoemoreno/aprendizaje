# Primer juego
# dato = input("Ingrese dato: ")

# lista = ["John", "Paul", "Ringo", "George", "Alfonso"]

# if lista.count(dato) > 0:
#     print("¡Felicitaciones! El dato: -", dato, "- existe en la lista")
# else:
#     print("El dato -", dato, "- lamentablemente no existe en la lista")

# Calculadora de sumas
primero = input("Ingrese el primer número: ")
try:
    primero = int(primero)
except:
    primero = "chanchito feliz"
if primero == "chanchito feliz":
    print("El valor no es válido")
    exit()

segundo = input("Ingrese el segundo número: ")
try:
    segundo = int(segundo)
except:
    segundo = "chanchito feliz"
if segundo == "chanchito feliz":
    print("El valor no es válido")
    exit()

print("El resultado es: ", primero + segundo)

print("Fin del programa")