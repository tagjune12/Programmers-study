function findPrimeNum(numList){
    let result=0;
    if(numList.length===0) return 0;
    
    for(let element of numList){
        const range = Math.floor(Math.sqrt(element));
        for(let i=2; i <= range; i++){
            if(element%i === 0) {
                result--;
                break; 
            }
        }
        result = result + 1;
        console.log('result',result);
    }
    return result;
}

function solution(n, k) {
    var answer = -1;

    // k진수로 변환
    const number = n.toString(k);
    
    let splittedNumList = number.split('0');
    splittedNumList=splittedNumList.filter(value=> value!=='');
    
    let decNum =[];
    
    splittedNumList.forEach(value=>{
        decNum.push(parseInt(value));
    });
   
    decNum= decNum.filter(value=>value!==1);
    answer = findPrimeNum(decNum);
       
    return answer;
}