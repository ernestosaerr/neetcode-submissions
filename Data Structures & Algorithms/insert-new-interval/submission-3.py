class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        result = []

        for i,lista in enumerate(intervals):
            if lista[1] < newInterval[0]:
                result.append(lista)

            elif lista[0] <= newInterval[1]:
                newInterval[0] = min(lista[0], newInterval[0])
                newInterval[1] = max(lista[1], newInterval[1]) 

            else:
                result.append(newInterval)
                result.extend(intervals[i:])

                return result


        result.append(newInterval)
        return result