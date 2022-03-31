function solution(s) {
    let x = s;
    let removedZero = 0;
    let cvtCount = 0;

    while(x!=='1'){
        const numOfOne = x.split("").reduce((acc,value)=>acc+parseInt(value),0);
        removedZero += x.length - numOfOne;
        x = numOfOne.toString(2);
        cvtCount++
    }

    return [cvtCount,removedZero];
}
