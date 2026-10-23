class Solution:
    def mergeTriplets(self, triplets: List[List[int]], target: List[int]) -> bool:
        first = False
        second = False
        third = False
        for triplet in triplets:
            
            if (triplet[0] > target[0] or
                triplet[1] > target[1] or
                triplet[2] > target[2]):
                continue

            if triplet[0] == target[0]:
                first = True

            if triplet[1] == target[1]:
                second = True

            if triplet[2] == target[2]:
                third = True

        return first and second and third

            