class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:

        hand.sort()
        size_hand = len(hand)

        if (size_hand % groupSize)  != 0:
            return False
        count = Counter(hand)
        
        for i in hand:

            if count[i] > 0:
                for x in range(i, i + groupSize):
                    if count[x] <= 0:
                        return False

                    count[x] -= 1

        return True     
            


# [1,2,4,2,3,5,3,4]
# [1,2,2,3,3,4,4,5]