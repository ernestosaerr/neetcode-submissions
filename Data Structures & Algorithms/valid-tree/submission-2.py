class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        
        graph = {i:[] for i in range(n)}

        for a,b in edges:
            graph[a].append(b)
            graph[b].append(a)

        visited = set()
        def dfs(node, parent):
            visited.add(node)

            for neighbor in graph[node]:
                if neighbor not in visited:
                    if dfs(neighbor, node):
                        return True
                elif neighbor in visited:
                    if neighbor != parent:
                        return True
            return False



        if dfs(0, -1) or len(visited) != n:
            return False
        else:
            return True
                
"""
visited = {1,2,3}
dfs(3,2)
"""