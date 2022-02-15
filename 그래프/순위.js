function solution(n, results) {
    let answer = 0;

    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(false));

    results.map(value => {
        const [win, lose] = value;
        graph[win][lose] = 1;
        graph[lose][win] = -1;
        graph[win][win] = 0;
        graph[lose][lose] = 0;
    });
    // 플루이드 워셜 알고리즘 사용
    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            for (let k = 1; k < n + 1; k++) {
                if (graph[j][i] === 1 && graph[i][k] === 1) graph[j][k] = 1;
                if (graph[j][i] === -1 && graph[i][k] === -1) graph[j][k] = -1;
            }
        }
    }

    for (let i = 1; i < n + 1; i++) {
        let hasFalse = false;
        for (let j = 1; j < n + 1; j++) {
            if (graph[i][j] === false) {
                hasFalse = true;
                break;
            }
        }
        answer = hasFalse ? answer + 0 : answer + 1;
    }

    return answer;
}

// 참고 : https://velog.io/@johnwi/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4lv3-%EC%88%9C%EC%9C%84-JavaScript