class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        frecuencias = {}
        for num in nums:
            frecuencias[num] = frecuencias.get(num, 0) + 1 
        
        resultado = []

        for _ in range(k):
            mayor = max(frecuencias, key = frecuencias.get)
            resultado.append(mayor)
            del frecuencias[mayor]
        
        return resultado
