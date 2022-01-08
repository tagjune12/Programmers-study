function compare(a, b) {
  return b > a ? 1 : -1;
}

function solution(citations) {
  let answer = 0;

  citations.sort(compare);

  let hIndices = [];
  for (let h = citations.length; h >= 0; h--) {
    let temp = citations.filter(value => value >= h);
    if (h === temp.length) hIndices.push(h);
  }
  answer = Math.max(...hIndices);
  if (hIndices.length === 0) {
    citations.forEach((value, index) => {
      if (index >= value) hIndices.push(index);
    })
  }
  answer = Math.min(...hIndices);

  return answer;
}

// -----------------------------

function compare(a, b) {
  return b > a ? 1 : -1;
}

function solution(citations) {
  let answer = 0;

  citations.sort(compare);

  let hIndices = [];
  for (let index = 0; index <= citations.length; index++) {
    if (index + 1 <= citations[index]) answer = index + 1;
  }


  return answer;
}