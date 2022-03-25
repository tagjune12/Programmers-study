function solution(n, left, right) {
//     // 실패
//     let answer = []; 
//     const range = Math.max(parseInt(left / n),parseInt(right/n))+1;
                   
//     // 1단계
//     const arr = Array.from(Array(range), ()=>Array(n));
//     // 2단계
//     const fillArray = ()=>{
//         for(let i=0; i < range; i++){
//             for(let j=0; j<n; j++){
//                 arr[i][j] = Math.max(i,j)+1;
//             }
//         }
//     }
       
//     fillArray();
    
//     answer = arr.slice(parseInt(left/n),parseInt(right/n)+1);
//     answer[0] = answer[0].slice(left%n);
//     answer[answer.length-1] = answer[answer.length-1].slice(0,right%n+1);
    
//     return answer.flat();

    // 성공
    const answer=[];
    
    for(let i=left;i<=right;i++){
        const row = Math.floor(i / n);
        const col = i % n;
        answer.push(Math.max(row,col)+1);
    }
    
    return answer;
}
