class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:

        def dfs(node, target, visited):
            if node in visited:
                return

            if node == target:
                return True

            visited.add(node)

            for neighbor in graph[node]:
                if neighbor not in visited:
                    if dfs(neighbor, target, visited):
                        return True

            return False

        graph = {i:[] for i in range(len(edges) + 1)}
        
        for a,b in edges:

            visited = set()
            if dfs(a, b, visited):
                return [a,b]

            graph[a].append(b)
            graph[b].append(a)

 






"""
 1---3
 | /
 2
"""