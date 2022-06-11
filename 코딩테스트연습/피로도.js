const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
      // 해당하는 fixed를 제외한 나머지 배열 
      const permutations = getPermutations(rest, selectNumber - 1); 
      // 나머지에 대해서 순열을 구한다.
      const attached = permutations.map((el) => [fixed, ...el]); 
      //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); 
      // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
}

function solution(k, dungeons) {
    let answer=0;
    
    const numOfDungeons = [];
    for(let i=0;i<dungeons.length;i++){
        numOfDungeons.push(i);
    }
    
    const candidates = getPermutations(numOfDungeons, numOfDungeons.length);
    
    for(const candidate of candidates){
        let remainPower = k;
        let clearedDungeon = 0;
        
        for(const idx of candidate){
            const [min, cost] = dungeons[idx];
            if(remainPower >= min){
                remainPower -= cost;
                clearedDungeon++;
            }
        }
        answer= Math.max(answer, clearedDungeon);
    }
    // console.log(answer);
    return answer;
}
