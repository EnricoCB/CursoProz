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
        resultado = 0
    return resultado

numero1 = float(input("Informe o primeiro número: "))
numero2 = float(input("Informe o segundo número: "))
operacao = str(input("Informe a operação(soma(+), subtração(-), multiplicação(*), divisão(/)): "))
print(soma(numero1, numero2, operacao))