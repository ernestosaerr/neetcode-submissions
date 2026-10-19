class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        stack  = []
        result = sorted(zip(position, speed), reverse = True)

        for pos, spd in result:
            time = (target - pos) / spd

            if not stack or stack[-1] < time:
                stack.append(time)

        return len(stack)