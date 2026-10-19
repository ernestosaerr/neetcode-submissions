class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        frecuencias = {}
        result = []

        for num in nums:
            frecuencias[num] = frecuencias.get(num, 0) + 1


        for _ in range(k):
            maximum_value = max(frecuencias, key = frecuencias.get)

            result.append(maximum_value)

            del frecuencias[maximum_value]

        return result
