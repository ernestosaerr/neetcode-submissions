class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        result = [0] * len(temperatures)
        stack = []

        for i in range(len(temperatures)):
            while stack and temperatures[i] > temperatures[stack[-1]]:
                element = stack.pop() # 1 - 0
                result[element] = i - element
            
            stack.append(i)

        return result


"""
[30,38,30,36,35,40,28]
stack = [0]

"""