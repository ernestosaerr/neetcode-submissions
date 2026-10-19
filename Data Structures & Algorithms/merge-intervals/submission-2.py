class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda x:x[0])
        result = []
        for lista in intervals:
            if not result:
                result.append(lista)
            else:
                if lista[0] <= result[-1][1]:
                    result[-1][1] = max(result[-1][1], lista[1])

                else:
                    result.append(lista)   


        return result 