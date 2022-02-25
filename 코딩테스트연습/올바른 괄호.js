function solution(s) {
    const stack = [];
    // s = s.split("");
    // for(const element of s){
    //     if(stack.length===0) {
    //         stack.push(element);
    //     }
    //     else{
    //         const top = stack.length-1;
    //         if(stack[top]==='(' && element===')') stack.pop();
    //         else stack.push(element);
    //     }
    // }

    // 이게 더 빠름
    const check = (element) => {
        if (stack.length === 0) {
            stack.push(element);
        }
        else {
            const top = stack.length - 1;
            if (stack[top] === '(' && element === ')') stack.pop();
            else stack.push(element);
        }
    }

    s.split("").forEach(value => check(value));

    return stack.length === 0 ? true : false;
}