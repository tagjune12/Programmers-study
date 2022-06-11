function solution(arr) {
    const answer=[0,0];
    let length = arr.length;

    const splitArr = (row,col,length) => {
        const cur = arr[row][col];
        let check = true;
        for(let i=row; i< row + length; i++){
            for(let j=col; j < col + length; j++){
                if(arr[i][j]!==cur){
                    const half = parseInt(length/2);
                    splitArr(row,col,half);
                    splitArr(row,col+half,half);
                    splitArr(row+half,col,half);
                    splitArr(row+half,col+half,half);
                    check = false;
                    break;
                }
            }
            if(!check) break;
        }
        if(check) answer[cur]++;
    }

    splitArr(0,0,length);

    return answer;
}
