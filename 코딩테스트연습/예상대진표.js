function solution(n, a, b) {
    let round = 1;
    // a가 b보다 작도록 바꿔줌
    if (b < a) {
        temp = b;
        b = a;
        a = temp;
    }

    while (true) {
        if ((b - a) === 1 && b % 2 === 0) break;
        else {
            a = Math.round(a / 2);
            b = Math.round(b / 2);
        }
        round++;
    }

    return round;
}