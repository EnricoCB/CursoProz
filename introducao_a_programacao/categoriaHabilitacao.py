qntdRodas = int(input("Quantidade de rodas: "))
pesoBruto = int(input("Peso Bruto em quilogramas: "))
qntdPessoas = int(input("Quantidade de pessoas no veículo: "))

if qntdRodas <= 3:
    print("categoria A")
elif qntdRodas <= 4 and qntdPessoas <= 8 and pesoBruto <= 3500:
    print("categotia B")
elif qntdRodas >= 4 and pesoBruto <= 6000:
    print("categoria C")
elif qntdRodas >= 4 and qntdPessoas >= 8:
    print("categoria D")
elif qntdRodas >= 4 and pesoBruto >= 6000:
    print("categoria E")