def calcIdade(nome, anoNasci):
    anoAtual = 2023
    idade = anoAtual - anoNasci
    return nome, idade

executar = True
while(executar):
    try:
        nome = input("Informe seu nome completo: ")
        anoNasci = int(input("Informe seu ano de nascimento: "))
        if anoNasci < 1922 or anoNasci > 2022:
            raise Exception("Informe o ano de nascimento entre 1922 e 2021")
        idade = calcIdade(nome, anoNasci)
        print(idade)
        executar = False
    except Exception as erro:
        print("Erro")
        print(erro)
