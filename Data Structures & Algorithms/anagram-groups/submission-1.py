class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = dict()
        for string in strs:
            ordenada = "".join(sorted(string))
        
            if ordenada in anagrams:
                anagrams[ordenada].append(string)
            else:
                anagrams[ordenada] = []
                anagrams[ordenada].append(string)

        return list(anagrams.values())
        