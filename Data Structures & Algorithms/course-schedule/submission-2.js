class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        function buildGraph(prerequisites){
            const graph = Array.from({ length: numCourses }, () => []);
            for(let [from, to] of prerequisites){
                graph[from].push(to);
            }
            return graph;
        }

        function createStates(numCourses){
            let obj = {};
            for(let i = 0; i < numCourses; i++){
                obj[i] = 0;
            }
            return obj;
        }
        // states = 0(unvisited), 1(visiting), 2(visited)
        let graph = buildGraph(prerequisites);
        let states = createStates(numCourses);

        function dfs(node){
            if(states[node] === 1) return true;
            if(states[node] === 2) return false;

            states[node] = 1;

            for(let neighbor of graph[node]) {
                if(dfs(neighbor)) return true;
            }

            states[node] = 2;
            return false;
        }
        
        for(let i = 0; i < numCourses; i++){
            if(states[i] === 0){
                if(dfs(i)) return false;
            }
        }
        return true;
    }
}
