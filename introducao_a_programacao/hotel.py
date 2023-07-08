for contador in range(20, 0, -1):
    if contador == 13:
        continue
    print(f"andar: {contador}")

contador = 20
while contador > 0:
    if contador == 13:
        contador -= 1
        continue
    print(f"Andar: {contador}")
    contador -= 1

contador = 20
while True:
    if contador == 13:
        contador -= 1
        continue
    print(f'Andar: {contador}')
    if contador == 1:
        break
    contador -= 1

