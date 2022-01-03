function solution(progresses, speeds) {
  let answer = [];

  let index = 0; // 배포가 완료된 작업의 개수
  while (index < speeds.length) {
    let count = 0; // 당일 배포된 작업을 담을 변수
    progresses = progresses.map((value, index) => value + speeds[index]);

    for (let i = index; i < progresses.length; i++) {
      // 진행도 확인
      if (progresses[i] >= 100) count++;
      else break; // 맨앞의 작업이 배포준비가 안됐으면 중단
    }

    answer.push(count); // 당일 배포된 작업의 개수를 추가
    index += count;
  }

  // 배포가 안된 날은 삭제
  answer = answer.filter((value) => value !== 0);
  return answer;
}