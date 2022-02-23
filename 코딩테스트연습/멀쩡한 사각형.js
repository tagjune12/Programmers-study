// w * h - (w+h-최대공약수)

// 유클리드 호제법
/**
 * @param {number} numA 피제수
 * @param {number} numB 제수
 * @returns 최대공약수
 */
function findGCD(numA, numB) {
    let gcd = 0;
    let dividend = numA;
    let divisor = numB;
    while (true) {
        if (dividend % divisor === 0) {
            gcd = divisor;
            break;
        }
        else {
            const extra = dividend % divisor;
            dividend = divisor;
            divisor = extra;
        }

    }

    return gcd;
}
/**
 * 
 * @param {number} w 사각형 너비
 * @param {number} h 사각형 높이
 * @returns 
 */
function solution(w, h) {
    let answer = 1;

    const gcd = w > h ? findGCD(w, h) : findGCD(h, w);

    answer = w * h - (w + h - gcd);

    return answer;
}