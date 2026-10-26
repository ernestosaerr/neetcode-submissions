class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        graph = {node: [] for node in range(1, n + 1)}
        for u, v, t in times:
            graph[u].append((v, t))
        dist = {node: float("inf") for node in range (1, n + 1)}
        dist[k] = 0

        heap = [(0, k)]
        dist[k] = 0

        while heap:
            current_dist, node = heapq.heappop(heap)

            if current_dist > dist[node]:
                continue

            for neighbor, time in graph[node]:
                new_dist = current_dist + time

                if new_dist < dist[neighbor]:
                    dist[neighbor] = new_dist

                    heapq.heappush(heap, (new_dist, neighbor))

        if any(d == float("inf") for d in dist.values()):
            return -1
        return max(dist.values())
        