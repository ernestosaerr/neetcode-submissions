class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        
        dp = [False] * (len(s) + 1)
        dp [0] = True
        mydict = set(wordDict)


        for i in range(1, len(s) + 1):
            for j in range(i):
            
                if dp[j] and s[j:i] in mydict:
                    dp[i] = True

        return dp[len(s)]




# dp = [True, False, False, False]