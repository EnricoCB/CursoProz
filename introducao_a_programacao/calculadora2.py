def soma(numero1, numero2, operacao):
    if operacao == "+":
        resultado = numero1 + numero2
    elif operacao == "-":
        resultado = numero1 - numero2
    elif operacao == "*":
        resultado = numero1 * numero2
    elif operacao == "/":
        resultado = numero1 / numero2
    else: 
        resultado = "essa opção não existe"
    return resultado

cont = 0
while True:
    if cont != 0:
        continuar = int(input("Digite '0' se quiser encerrar o programa ou qualquer outro número para continuar: "))
        if continuar == 0:
            break
    numero1 = float(input("Informe o primeiro número: "))
    numero2 = float(input("Informe o segundo número: "))
    operacao = str(input("Informe a operação(soma(+), subtração(-), multiplicação(*), divisão(/)): "))
    resultado = soma(numero1, numero2, operacao)
    print(f"{numero1} {operacao} {numero2} = {resultado}")
    cont = 1