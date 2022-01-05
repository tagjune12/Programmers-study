function solution(maps) {

  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];

  const mapSizeX = maps[0].length - 1;
  const mapSizeY = maps.length - 1;

  let visited = [...maps].map((list) => list.map((element) => 1));

  let queue = [[0, 0]];

  while (queue.length !== 0) {
    // 방문처리
    const [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nextX = x + dx[i];
      const nextY = y + dy[i];
      // 맵 크기를 안넘어가는 경우
      if (nextX >= 0 && nextY >= 0 && nextX <= mapSizeX && nextY <= mapSizeY) {
        // 다음 지점을 방문하지 않은 경우
        if (maps[nextY][nextX] === 1 && visited[nextY][nextX] === 1) {
          visited[nextY][nextX] = visited[y][x] + 1;
          queue.push([nextY, nextX]);
        }
      }
    }
  }

  return visited[mapSizeY][mapSizeX] === 1 ? -1 : visited[mapSizeY][mapSizeX];
}