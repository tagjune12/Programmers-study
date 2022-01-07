function solution(brown, yellow) {
  var answer = [];

  const total = brown + yellow;

  // 가로 , 세로
  let commonDigit = [];

  for (let i = 3; i < total; i++) {
    if (total % i === 0) {
      if (total / i >= i) commonDigit.push([total / i, i]);
      else break;
    }
  }
  commonDigit.forEach((value) => {
    if ((yellow === (value[0] - 2) * (value[1] - 2))) answer = value;
  })


  return answer;
}