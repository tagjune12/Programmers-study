function solution(priorities, location) {
  let answer = 0;
  const targetPriority = priorities[location];
  let targetIndex = location;

  while (priorities.length !== 0) {
    let check = priorities.map((value) => value > priorities[0]);
    // 우선순위가 높은 문서가 있을 경우
    if (check.includes(true)) {
      const temp = priorities.shift();
      priorities.push(temp);
      targetIndex = (targetIndex - 1 + priorities.length) % priorities.length;
    }
    else {
      priorities.shift();
      answer++;
      if (targetIndex === 0) break;
      targetIndex = (targetIndex - 1 + priorities.length) % priorities.length;
    }
  }

  return answer;
}