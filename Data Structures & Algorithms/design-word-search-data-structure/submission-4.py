class WordDictionary:

    class TrieNode:
        def __init__(self):
            self.children = {}
            self.is_end = False

    def __init__(self):
        self.root = self.TrieNode()

    def addWord(self, word: str) -> None:
        node = self.root
        for char in word :
            if char not in node.children:
                node.children[char] = self.TrieNode()
    
            node = node.children[char]

        node.is_end = True
        

    def search(self, word: str) -> bool:
        visited = set()
        def dfs (node, index):

            # final de cadena 
            if index == len(word):
                return node.is_end

            char = word[index]

            # caso normal palabra en especifico
            if char != ".":
                if char not in node.children:
                    return False

                return dfs(node.children[char], index + 1)

            # caso "." podemos tomar cualquier hijo

            for child in node.children.values():
                if dfs(child, index + 1):
                    return True

            return False

        return dfs(self.root, 0)




