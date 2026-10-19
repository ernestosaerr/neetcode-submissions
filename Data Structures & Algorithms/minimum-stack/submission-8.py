class MinStack:

    def __init__(self):
        self.stack = []
        self.support_stack = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        if not self.support_stack:
            self.support_stack.append(val)
        elif val <= self.support_stack[-1]:
            self.support_stack.append(val)

    def pop(self) -> None:
        element = self.stack.pop()
        if element == self.support_stack[-1]:
            self.support_stack.pop()

    def top(self) -> int:
        return self.stack[-1] 

    def getMin(self) -> int:
        return self.support_stack[-1] if self.support_stack else None

