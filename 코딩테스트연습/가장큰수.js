function compare(a,b){
    return a+b > b+a ? -1 : 1;
};

function solution(numbers) {
    let answer = '';

    let stringNumbers = numbers.map((value)=>(value.toString()));

    stringNumbers.sort(compare);
    answer = stringNumbers.reduce((accumulator, currentValue)=>
                                  {return accumulator + currentValue;})
    // console.log(stringNumbers);
    if(answer[0]==='0') return '0';
    return answer;
}