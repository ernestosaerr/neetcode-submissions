class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda x:x[1])

        removals = 0
        lastOne = []

        for subIntervalo in intervals:
            if not lastOne:
                lastOne.append(subIntervalo[0])
                lastOne.append(subIntervalo[1])
            elif subIntervalo[0] < lastOne[1]:
                removals += 1
            else:
                lastOne[0] = subIntervalo[0]
                lastOne[1] = subIntervalo[1]

        return removals