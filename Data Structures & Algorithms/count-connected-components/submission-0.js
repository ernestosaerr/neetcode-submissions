class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        function createGraph(n, edges){
            let graph = {};
            for(let i = 0; i<n; i++) graph[i] = [];
            for(let [a,b] of edges) {
                if(!graph[a]) graph[a] = [];
                if(!graph[b]) graph[b] = [];
                graph[a].push(b);
                graph[b].push(a);
            }
            return graph;
        }
        const graph = createGraph(n, edges);

        function count(graph) {
            let visited = new Set();
            let components = 0;

            for(let node in graph) {
                node = Number(node);
                if(!visited.has(node)) {
                    dfs(graph, node, visited);
                    components ++;
                }
            }
            
            function dfs(graph, node, visited) {
                if(visited.has(node)) return;
                visited.add(node);
                for(let neighbor of graph[node]) {
                    dfs(graph, neighbor, visited);
                }
            }
            return components;
        }
        return count(graph);
    }
}
