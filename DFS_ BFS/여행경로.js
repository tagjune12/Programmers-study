// 틀린 풀이(내풀이)
function compare(valueA, valueB) {
    return valueA < valueB ? 1 : -1;
}

function solution(tickets) {

    const dfs = (start) => {
        let stack = [];
        let route = [];

        stack.push(start);

        while (stack.length > 0) {
            const from = stack.pop();
            route.push(from);

            const children = tickets.filter(ticket => ticket[0] === from).map(value => value[1]).sort(compare);
            tickets = tickets.filter(ticket => ticket[0] !== from);
            stack = [...stack, ...children];

        }

        return route;
    }

    return dfs("ICN");
}

// 맞는 풀이
function solution(tickets) {
    let answer = [];
    const result = [];
    const visited = [];

    tickets.sort();

    const len = tickets.length;
    /**
     * 
     * @param {string} start 현재 위치
     * @param {Number} count tree의 depth
     * @returns 유효한 경로인가?에 대한 값을 boolean값으로 반환함
     */
    const dfs = (start, count) => {
        result.push(str);

        if (count === len) {
            answer = result;
            return true;
        }

        for (let i = 0; i < len; i++) {
            if (!visited[i] && tickets[i][0] === start) { // 사용하지 않은 티켓 && 출발지가 일치하는 티켓 선택
                visited[i] = true; // 해당 티켓 사용처리

                // 선택된 티켓으로 다음 사용할 티켓 찾기
                // 해당 경로가 유효하다면 true를 리턴함
                if (dfs(tickets[i][1], count + 1)) return true;

                // 선택된 티켓으로 갔을때 유효한 경로가 아닌경우 티켓을 사용하지 않은것으로 처리
                visited[i] = false;
            }
        }

        // 전체를 탐색하지 못한경우 실행 -> 즉 유효한 경로가 아니므로 이전으로 돌아가야함
        result.pop();

        // 유효한 경로가 아니면 false 리턴함
        return false;
    }

    dfs("ICN", 0);

    return answer;
}

// https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EC%97%AC%ED%96%89%EA%B2%BD%EB%A1%9C-JS