function solution(begin, target, words) {
  var answer = 0;
  let visited = [];
  let queue = [];

  if (!words.includes(target)) return 0;
  queue.push([begin, answer]);

  while (queue) {
    let [curWord, count] = queue.shift();
    if (curWord === target) return count;

    words.forEach(word => {
      let notEqual = 0;
      // 탐색햇던 단어일 경우 스킵
      if (visited.includes(word)) return;
      for (let i = 0; i < word.length; i++) {
        if (word[i] !== curWord[i]) notEqual++;
      }
      // 알파벳 하나를 바꿔서 대치가 가능한경우 or 안바꿔도 되는경우
      if (notEqual <= 1) {
        queue = [[word, count + 1], ...queue];
        // queue.push([word, count + 1]);
        visited.push(word);
      }
    });
    console.log("visited:", visited);
    console.log("queue:", queue);
    console.log();
    // console.log(`cur: ${curWord} answer: ${answer}`)
  }
  return answer;
}

const begin = "hit";
const target = "cog";
words = ["hot", "dot", "dog", "lot", "log", "cog"];

console.log(solution(begin, target, words));