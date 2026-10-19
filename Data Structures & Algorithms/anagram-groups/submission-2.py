class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        
        anagrams = {}


        for word in strs:
            ordered_word = "".join(sorted(word))

            if ordered_word not in anagrams:
                anagrams[ordered_word] = []

            anagrams[ordered_word].append(word)
            
        return list(anagrams.values())
            