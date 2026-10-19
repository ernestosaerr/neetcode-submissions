class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        order = []

        states = [0] * numCourses

        graph = {i:[] for i in range(numCourses)}

        for course, prerequisite in prerequisites:
            graph[prerequisite].append(course)
        def dfs(node):
            states[node] = 1

            for neighbor in graph[node]:
                if states[neighbor] == 0:
                    if dfs(neighbor):
                        return True

                elif states[neighbor] == 1:
                    return True

            
            states[node] = 2
            order.append(node)
            return False


        for course in range(numCourses):
            if dfs(course):
                return []

        return order[::-1]