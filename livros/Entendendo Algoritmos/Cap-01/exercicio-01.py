# exercício 01: https://leetcode.com/problems/search-insert-position/


class Solution:
    def betweenList(min, max, alvo):
        if alvo > min & alvo < max:
            return True

        return False

    def searchInsert(lista, alvo):
        indiceMinimo = 0
        indiceMaximo = len(lista) - 1
        ultimaPosicaoMeio = 0

        while indiceMinimo <= indiceMaximo:
            posicaoDoMeio = int((indiceMinimo + indiceMaximo) / 2)

            if lista[posicaoDoMeio] == alvo:
                return posicaoDoMeio

            if lista[posicaoDoMeio] > alvo:
                indiceMaximo = posicaoDoMeio - 1
                if Solution.betweenList(
                    lista[indiceMaximo], lista[posicaoDoMeio], alvo
                ):
                    return posicaoDoMeio
            else:
                indiceMinimo = posicaoDoMeio + 1
                if Solution.betweenList(
                    lista[posicaoDoMeio], lista[indiceMinimo], alvo
                ):
                    return posicaoDoMeio

            if indiceMinimo <= indiceMaximo:
                ultimaPosicaoMeio = posicaoDoMeio

        if alvo > len(lista) - 1:
            return len(lista)

        if alvo <= 0:
            return 0

        return ultimaPosicaoMeio

    lista = [1, 3, 5, 6]
    print(searchInsert(lista, 5))  # 1
