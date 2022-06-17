function solution(jobs) {
  let j = 0;
  let time = 0;
  let total = 0;
  jobs.sort((a, b) => a[0] - b[0]);

  const readyQueue = [];
  while (j < jobs.length || readyQueue.length !== 0) {
    if (jobs.length > j && endTime >= jobs[j][0]) {
      readyQueue.push(jobs[j++]);
      readyQueue.sort((a, b) => a[1] - b[1]);
      continue;
    }
    if (readyQueue.length !== 0) {
      endTime += readyQueue[0][1];
      total += endTime - readyQueue[0][0];
      readyQueue.shift();
    } else {
      endTime = jobs[j][0];
    }
  }

  return parseInt(total / jobs.length);
};