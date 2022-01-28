function solution(n, computers) {
  var answer = 0;

  let visited = [];
  function bfs(computers, startNode) {
    let queue = [];

    queue.push(startNode);

    while (queue.length !== 0) {
      let currentNode = queue.shift();

      if (!visited.includes(currentNode)) {
        visited.push(currentNode);
        const nextNodes = [];
        computers[currentNode].forEach((value, index) => {
          if (value === 1) return nextNodes.push(index);
        });
        console.log(nextNodes);
        queue = [...queue, ...nextNodes];
      }
    }
    answer = answer + 1;
    return;
  }


  for (let i = 0; i < computers[0].length; i++) {
    if (!visited.includes(i)) bfs(computers, i);
  }

  return answer;
}