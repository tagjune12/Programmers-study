function calculateFee(fee, timeLine) {
  let times = [...timeLine];
  if (times.length % 2) times.push('23:59');

  let difference = 0;
  for (let i = 0; i < times.length; i += 2) {
    const [startHour, startMin] = times[i].split(":");
    const [endHour, endMin] = times[i + 1].split(":");

    const start = parseInt(startHour) * 60 + parseInt(startMin);
    const end = parseInt(endHour) * 60 + parseInt(endMin);
    difference += (end - start);
  }
  if (difference <= fee[0]) return fee[1];
  else {
    difference = difference - fee[0];
    return fee[1] + Math.floor(difference / fee[2]) * fee[3] + (difference % fee[2] ? fee[3] : 0);
  }
}

function solution(fees, records) {
  var answer = [];

  // 객체
  // 차량번호 : [출입시간:string]
  const timeLines = {};

  for (let element of records) {
    const [time, number, inout] = element.split(" ");
    if (timeLines[number] === undefined) timeLines[number] = [];
    timeLines[number].push(time);
  }

  const carNumbers = [];
  for (let key in timeLines) {
    carNumbers.push(key);
  }
  carNumbers.sort();

  for (let key of carNumbers) {
    answer.push(calculateFee(fees, timeLines[key]));
  }

  return answer;
}