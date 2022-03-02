function solution(s) {
    let answer = 0;

    for (let i = 0; i < s.length; i++) {
        const stack = [];
        const splitted = [...s.slice(i), ...s.slice(0, i)];

        for (const spell of splitted) {
            if (stack.length === 0) stack.push(spell);
            else {
                const top = stack.length - 1;
                switch (stack[top]) {
                    case '(': {
                        if (spell === ')') stack.pop();
                        else stack.push(spell);
                        break;
                    }

                    case '{': {
                        if (spell === '}') stack.pop();
                        else stack.push(spell);
                        break;
                    }
                    case '[': {
                        if (spell === ']') stack.pop();
                        else stack.push(spell);
                        break;
                    }
                } // switch done
            }
        } // for2 done
        if (stack.length === 0) answer++;
    } // for1 done
    return answer;
}