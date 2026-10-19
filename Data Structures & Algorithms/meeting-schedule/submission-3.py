"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    def canAttendMeetings(self, intervals: List[Interval]) -> bool:
        intervals.sort(key = lambda x: x.start)
        lastOne = None
        for subLista in intervals:
            if not lastOne:
                lastOne = subLista.end
            elif subLista.start < lastOne:
                return False
            else:
                lastOne = subLista.end

        return True