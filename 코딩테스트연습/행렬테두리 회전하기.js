function initialize(rows, columns) {
    const max = rows * columns;
    let count = 1;
    const arr = Array.from(Array(rows + 1), () => Array(columns + 1).fill(0));

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= columns; j++) {
            arr[i][j] = count++;
        }
    }
    return arr;
}

function solution(rows, columns, queries) {
    let answer = [];

    const matrix = initialize(rows, columns);
    const rotate = (query) => {
        const [x1, y1, x2, y2] = query; // x = 행, y = 열
        const changeList = [];

        const makeColumnList = (y) => {
            const result = []
            for (let row = x1 + 1; row < x2; row++) {
                result.push(matrix[row][y]);
            }
            return result;
        }
        const changeColumnList = (y, list) => {
            let listIdx = 0;
            for (let row = x1 + 1; row < x2; row++) {
                matrix[row][y] = list[listIdx++];
            }
        }

        changeList.push(matrix[x1].slice(y1, y2 + 1)); // 행 리스트1
        changeList.push(makeColumnList(y2)); // 열 리스트1
        changeList.push(matrix[x2].slice(y1, y2 + 1)); // 행 리스트2
        changeList.push(makeColumnList(y1)); // 열 리스트2

        let minimums = changeList.map(listElement => Math.min(...listElement));

        answer.push(Math.min(...minimums));// 바뀌는 값중 최소값 찾아 삽입

        changeList[1].unshift(changeList[0].pop());
        changeList[2].push(changeList[1].pop());
        changeList[3].push(changeList[2].shift());
        changeList[0].unshift(changeList[3].shift());

        matrix[x1] = [...matrix[x1].slice(0, y1), ...changeList[0], ...matrix[x1].slice(y2 + 1)];
        matrix[x2] = [...matrix[x2].slice(0, y1), ...changeList[2], ...matrix[x2].slice(y2 + 1)];
        changeColumnList(y2, changeList[1]);
        changeColumnList(y1, changeList[3]);
    }

    queries.forEach(query => rotate(query));

    return answer;
}