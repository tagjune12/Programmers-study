function findSmallIdx(route,visited){
    let smallestIdx=0;
    let minimumCost=Number.POSITIVE_INFINITY;
    for(let i=2;i<=route.length;i++){
        if(route[i]<minimumCost && visited.includes(i)===false){
            smallestIdx = i;
            minimumCost = route[i];
        }
    }
    
    return smallestIdx;
}

function dijkstra(graph){
    const route = [...graph[1]];
    const visited = [1];
    
    for(let i=1; i<=route.length;i++){
        const nextNode = findSmallIdx(route,visited);
        // console.log(nextNode);
        visited.push(nextNode);
        for(let i=1;i<=route.length;i++){
            if(route[nextNode] + graph[nextNode][i] < route[i]){
                route[i] = route[nextNode] + graph[nextNode][i];
            }
        }
    }
    return route;
}

function solution(N, roads, K) {
    var answer = 0;
    const INF = Number.POSITIVE_INFINITY;
    const graph=Array.from(Array(N+1), ()=>Array(N+1).fill(INF));
    
    for(const road of roads){
        const [from,to,cost] = road;
        if(graph[from][to]===INF){
            graph[from][to] = cost;
            graph[to][from]=cost;
        }
        else{
            const minCost = Math.min(graph[from][to], cost);
            graph[from][to] = minCost;
            graph[to][from] = minCost;
        }
        graph[from][from]=0;
        graph[to][to]=0;
    }
    // console.log(graph[1]);
    const route = dijkstra(graph);
    // console.log(route);
    // console.log(route.filter(value=>value<=K));
    return route.filter(value=>value<=K).length;
}

// const N = 6;
// const road = [[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]];
// const K = 4;

// solution(N,road,K);
