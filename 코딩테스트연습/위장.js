function solution(clothes) {
    var answer = 0;

    const clothesMap = {};
    for (const cloth of clothes) {
        const [value, key] = cloth;
        if (clothesMap[key] === undefined) {
            clothesMap[key] = [];
        }
        clothesMap[key].push(value);
    }

    let temp = 1;

    for (const element in clothesMap) {

        temp = temp * (clothesMap[element].length + 1);
    }

    answer = temp - 1;
    return answer;
}