class Solution:
    def isValid(self, s: str) -> bool:
        brackets = {
            "(" : ")",
            "{" : "}",
            "[" : "]",
        }

        stack = []

        for char in s:
            if char in brackets:
                stack.append(char)
            else:
                if not stack:
                    return False
                element = stack.pop()
                if brackets[element] != char:
                    return False

        return True if not stack else False

                

        
# ]]
# stck = ( [  
# element = {