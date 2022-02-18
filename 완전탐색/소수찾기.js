function getPermutations(arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)] // 해당하는 fixed를 제외한 나머지 배열 
        const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해 순열을 구한다.
        const attached = permutations.map((permutation) => [fixed, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
        results.push(...attached); // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
};

function checkIsPrimeNum(number) {
    if (number < 2) return false;

    const limit = Math.floor(Math.sqrt(number));

    for (let i = 2; i <= limit; i++) {
        if (number % i === 0) return false;
    }

    return true;
}

function solution(numbers) {
    let answer = 0;

    const elements = numbers.split("");
    let permutations = [];
    for (let i = 1; i <= numbers.length; i++) {
        permutations.push(...getPermutations(elements, i).map((value) => Number(value.join(""))));
    }

    // console.log(permutations);
    const numberSet = new Set(permutations);
    // console.log(numberSet);

    // 소수인지 판별
    for (const number of numberSet) {
        if (checkIsPrimeNum(number)) answer++;
    }

    return answer;
}