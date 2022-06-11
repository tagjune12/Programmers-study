function solution(n, edges) {
    const nodes = Array.from({ length: n }, (_, index) => index);

    const tree = {};

    // 트리 생성
    for (const edge of edges) {
        const [start, end] = edge;

        if (tree[start] === undefined) {
            tree[start] = [];
        }
        if (tree[end] === undefined) {
            tree[end] = [];
        }
        tree[start].push(end);
        tree[end].push(start);
    }



    const getPermutations = (arr, selectedNumber) => {
        const results = [];
        if (selectedNumber === 1) return arr.map((el) => [el]);

        arr.forEach((fixed, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]
            const permutations = getPermutations(rest, selectedNumber - 1);
            const attached = permutations.map((el) => [fixed, ...el]);
            results.push(...attached);
        });

        return results;
    }

    const candidates = getPermutations(nodes, 3);

    const dfs = (start, end) => {
        let stack = [start];
        const visited = [];
        const distance = {};
        distance[start] = 1;


        while (stack.length > 0) {
            const curNode = stack.pop();
            if (curNode === end) break;
            if (!visited.includes(curNode)) {
                const children = tree[curNode];
                stack = [...stack, ...children];
                children.forEach(node => {
                    if (!visited.includes(node)) {
                        distance[node] = distance[curNode] + 1;
                    }
                })
                visited.push(curNode);
            }
        }

        return distance[end] !== undefined ? distance[end] - 1 : null;
    }

    let answer = 0;
    candidates.forEach((value) => {
        const [i, j, k] = value;
        const distanceA = dfs(i, j);
        const distanceB = dfs(j, k);
        const distanceC = dfs(i, k);

        if (distanceA !== null && distanceB !== null && distanceC !== null) {
            if (distanceA + distanceB === distanceC) answer++;
        }
    })

    return answer;
}

console.time("Start");
const n = 5;
const edges = [[0, 1], [0, 2], [1, 3], [1, 4]];
solution(n, edges);
console.timeEnd("Start");