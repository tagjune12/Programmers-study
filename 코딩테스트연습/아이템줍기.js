function solution(rectangle, characterX, characterY, itemX, itemY) {
    // 좌표값 2배로 만들기
    const doubleSizeRect = rectangle.map((rectPos) =>
        rectPos.map((pos) => pos * 2)
    );
    const outline = Array.from(Array(102), () => Array(102).fill(0));

    // 윤곽선을 1로 채움
    doubleSizeRect.forEach((rect) => {
        const [x1, y1, x2, y2] = rect;
        for (let i = x1; i <= x2; i++) {
            outline[i][y1] = 1;
            outline[i][y2] = 1;
        }
        for (let i = y1; i <= y2; i++) {
            outline[x1][i] = 1;
            outline[x2][i] = 1;
        }
    });

    doubleSizeRect.forEach((rect) => {
        const [x1, y1, x2, y2] = rect;
        for (let i = x1 + 1; i < x2; i++) {
            for (let j = y1 + 1; j < y2; j++) {
                outline[i][j] = 0;
            }
        }
    });

    const pos = [];
    for (let i = 0; i < 102; i++) {
        for (let j = 0; j < 102; j++) {
            if (outline[i][j] === 1) pos.push([i, j]);
        }
    }

    // BFS 탐색
    const bfs = (start, end, rectangle, outline) => {
        const queue = [start];
        const dx = [0, 0, 1, -1];
        const dy = [1, -1, 0, 0];
        const visited = Array.from(Array(102), () => Array(102).fill(false));

        visited[start[0]][start[1]] = true;

        while (queue.length > 0) {
            const [curX, curY] = queue.shift();
            if (curX === end[0] && curY === end[1])
                return parseInt((outline[curX][curY] - 1) / 2);

            for (let i = 0; i < 4; i++) {
                const [nextX, nextY] = [curX + dx[i], curY + dy[i]];
                if (
                    nextX > 1 &&
                    nextY > 1 &&
                    nextX < 102 &&
                    nextY < 102 &&
                    visited[nextX][nextY] === false &&
                    outline[nextX][nextY] === 1
                ) {
                    queue.push([nextX, nextY]);
                    visited[nextX][nextY] = true;
                    outline[nextX][nextY] = outline[curX][curY] + 1;
                }
            }
        }
    };

    return bfs(
        [characterX * 2, characterY * 2],
        [itemX * 2, itemY * 2],
        doubleSizeRect,
        outline
    );
}
