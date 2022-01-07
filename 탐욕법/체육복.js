function solution(n, lost, reserve) {
  let answer = 0;

  lost.sort();
  reserve.sort();

  // 여분을 가진 학생이 체육복을 도난당한 경우
  for (let element of lost) {
    if (lost.includes(element) && reserve.includes(element)) {
      lost = lost.filter(value => value !== element);
      reserve = reserve.filter(value => value !== element);
    }
  }

  for (let element of lost) {
    let target = null;
    if (reserve.includes(element - 1)) target = element - 1;
    else if (reserve.includes(element + 1)) target = element + 1;
    else continue;

    if (target !== null) {
      lost = lost.filter((value) => (value !== element));
      reserve = reserve.filter((value) => (value !== target));
    }
  }

  answer = n - lost.length;

  return answer;
}