function solution(n) {
    let answer = 0;
    let board = Array(n + 1).fill(0);

    function checkConfliction(row) {
        for (let i = 1; i < row; i++) {
            if (board[i] === board[row]) return true; // 같은 col에 위치하는게 있으면 충돌
            if (Math.abs(board[i] - board[row]) === row - i) return true;
        }

        return false;
    }

    function dfs(row) {
        if (row === n + 1) {
            answer++;
            return;
        } // 맨 마지막 행까지 모두 탐색한 경우
        else {
            for (let col = 1; col <= n; col++) {
                board[row] = col;
                if (!checkConfliction(row)) {
                    dfs(row + 1);
                };
            }
        }
    }

    for (let i = 1; i <= n; i++) {
        // board[1]=4; 면 1행 4열에 퀸이 있다는 뜻
        board[1] = i;
        dfs(2);
    }
    return answer;
}

console.log(solution(8));
// https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EC%B5%9C%EA%B3%A0%EC%9D%98-%EC%A7%91%ED%95%A9-JS-2xs6gra3