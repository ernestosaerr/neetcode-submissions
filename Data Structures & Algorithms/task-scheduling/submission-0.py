class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        frequencies = {}

        for char in tasks:
            frequencies[char] = frequencies.get(char, 0) + 1

        heap = [-x for x in frequencies.values()]

        heapq.heapify(heap)

        time = 0 
        queue = deque()


        while heap or queue:
            time += 1

            if heap:
                freq = heapq.heappop(heap)
                freq += 1
        
                if freq < 0:
                    queue.append((freq, time + n + 1))

            if queue and queue[0][1] == time + 1:
                heapq.heappush(heap, queue.popleft()[0])

        return time