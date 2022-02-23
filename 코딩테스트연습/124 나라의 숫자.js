function solution(n) {
    let answer = '';

    let spare = 0;
    let share = n;

    while (share > 0) {
        share = Math.floor(n / 3);
        spare = n % 3;

        if (spare === 0) {
            share--;
            spare = 4;
        }
        answer = spare + answer;
        n = share;
    }

    return answer;
}