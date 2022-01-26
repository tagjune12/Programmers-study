const compare = (a, b) => {
  return a['cost'] - b['cost'];
}

const dijkstra = (n, adj) => {
  let distance = Array(n + 1).fill(Number.POSITIVE_INFINITY);
  const queue = [];

  queue.push({ node: 1, cost: 0 });
  distance[1] = 0;
  queue.sort(compare); // cost가 적은게 맨 앞에 오도록 정렬

  while (queue.length > 0) {
    const { node: curNode, cost } = queue.shift();

    adj[curNode].forEach((nextNode) => {
      if (distance[curNode] + 1 < distance[nextNode]) {
        distance[nextNode] = distance[curNode] + 1;
        queue.push({ node: nextNode, cost: distance[nextNode] });
      }
    });
    queue.sort(compare);
  }
  distance = distance.splice(1); // 1번인덱스부터 끝까지 자름
  console.log(distance);
  const MAX = Math.max(...distance);
  return distance.filter(value => value === MAX).length;
};

function solution(n, edge) {
  let answer = 0;
  let adj = Array.from({ length: n + 1 }, () => []);

  // 인접 리스트 생성
  edge.forEach((route) => {
    adj[route[0]].push(route[1]);
    adj[route[1]].push(route[0]);
  });

  // 다익스트라
  answer = dijkstra(n, adj);
  return answer;
}