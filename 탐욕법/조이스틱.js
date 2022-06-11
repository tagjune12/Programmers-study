
function solution(name) {
    let answer = 0;

    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
        "K", "L", "M", "N", "O", "P", "Q", "R", "X", "T",
        "U", "V", "W", "X", "Y", "Z"];

    const nickname = Array(name.length).fill('A');

    const findForward = (curIndex) => {
        console.log("findForward");
        let count = 1;
        let destination = curIndex;
        for (let i = curIndex + 1; i !== curIndex; i++, count++) {
            i = i % name.length;
            if (name[i] !== nickname[i]) {
                destination = i;
                break;
            }
        }
        return [count, destination];
    }

    const findBackward = (curIndex) => {
        console.log("findBackward");
        let count = 1;
        let destination = curIndex;
        for (let i = curIndex - 1; i !== curIndex; i--, count++) {
            i = (i + name.length) % name.length;
            if (name[i] !== nickname[i]) {
                destination = i;
                break;
            }
        }
        return [count, destination];
    }

    const changeAlphabet = (index) => {
        nickname[index] = name[index];
        const cntForChage = alphabet.findIndex(element => element === name[index]);
        answer += cntForChage <= 13 ? cntForChage : (26 - cntForChage);
    }

    let index = 0;
    changeAlphabet(index);
    console.log(answer);
    while (nickname.join("") !== name) {
        const forward = findForward(index);
        const backward = findBackward(index);

        if (forward[0] <= backward[0]) {
            console.log("forward is close", forward[0]);
            index = forward[1];
            answer += forward[0];
        }
        else {
            console.log("backward is close", backward[0]);
            index = backward[1];
            answer += backward[0];
        }
        // change Alphabet
        changeAlphabet(index);
        // console.log(`nickname:${nickname} name:${name} cntForChage:${cntForChage} answer:${answer}`);
        // console.log(nickname);
        console.log(`nickname: ${nickname}, answer:${answer}`);
    }
    // const numOfA = nickname.filter(element => element === 'A').length;
    // console.log(nickname);
    // return answer + numOfA;
    return answer;
}

console.log(solution("BBBAAAAAAAB"));