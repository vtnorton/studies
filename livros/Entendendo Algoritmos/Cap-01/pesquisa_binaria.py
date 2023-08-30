def pesquisa_binaria(lista, item):
    posicaoMaisBaixa = 0
    posicaoMaisAlta = len(lista) - 1

    while posicaoMaisBaixa <= posicaoMaisAlta:
        meio = (posicaoMaisBaixa + posicaoMaisAlta) / 2
        meio = int(meio)
        chute = lista[meio]
        if chute == item:
            return meio
        if chute > item:
            posicaoMaisAlta = meio - 1
        else:
            posicaoMaisBaixa = meio + 1

    return None


minha_lista = [1, 3, 5, 7, 9]

print(pesquisa_binaria(minha_lista, 3))
print(pesquisa_binaria(minha_lista, -1))
