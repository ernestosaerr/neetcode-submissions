class Solution:
    def foreignDictionary(self, words: List[str]) -> str:
        graph = {node: set() for word in words for node in word}
        indegree = {node:0 for node in graph}


        for i in range(len(words) - 1):
            word1 = words[i]
            word2 = words[i + 1]
            if len(word1) > len(word2) and word1.startswith(word2):
                return ""

            for j in range(min(len(word1), len(word2))):
                if word1[j] != word2[j]:
                    char1 = word1[j]
                    char2 = word2[j]


                    if char2 not in graph[char1]:
                        graph[char1].add(char2)
                        indegree[char2] += 1

                    break   

        queue = deque(
            char for char in graph
            if indegree[char] == 0
        )


        result = []

        while queue:
            char = queue.popleft()
            result.append(char)

            for neighbor in graph[char]:
                indegree[neighbor] -= 1

                if indegree[neighbor] == 0:
                    queue.append(neighbor)


        if len(result) < len(graph):
                return ""
        
        return "".join(result)