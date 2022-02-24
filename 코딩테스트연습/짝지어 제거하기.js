function solution(s) {
    let stack = [];

    for (const element of s) {
        if (stack.length === 0) {
            stack.push(element);
            continue;
        }
        else {
            const lastIdx = stack.length - 1;
            if (stack[lastIdx] === element) stack.pop();
            else stack.push(element);
        }
    }

    return stack.length === 0 ? 1 : 0;
}