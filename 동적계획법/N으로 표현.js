function calculation(set1, set2) {
    let result = new Set();

    set1.forEach(value1 => {
        set2.forEach(value2 => {
            result.add(value1 + value2); // 더하기
            result.add(value1 - value2); // 빼기
            result.add(value1 * value2); // 곱하기
            if (value2 !== 0) result.add(Math.floor(value1 / value2)); // 나누기
        });
    });

    return result;
}

function solution(N, number) {
    var answer = 0;

    let dp = [];
    let concatedNum = 0;

    while (dp.length <= 8) {
        let candidate = new Set();
        concatedNum = concatedNum * 10 + N;
        candidate.add(concatedNum);

        for (let i = 0; i < dp.length; i++) {
            const j = dp.length - (i + 1);
            candidate = new Set([...candidate, ...calculation(dp[i], dp[j])]);
        }
        if (candidate.has(number)) return dp.length + 1;
        else {
            dp.push(candidate);
        }
    }


    return -1;
}

// console.log(solution(5,12));