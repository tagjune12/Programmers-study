function solution(id_list, report, k) {
    var answer = [];
    // 유저 정보
    // 유저 : set {내가 신고한유저}
    let userInfo={};
    
    // 정지목록
    // 유저 : 신고당한 횟수
    const reportTime = {};
    
    for(let element of id_list){
        userInfo[element] = new Set();
    }
    
    for(let element of report){
        const [key, value] = element.split(" ");
        userInfo[key].add(value);
    }
    
    for(let key in userInfo){
        for(let item of userInfo[key]){
            if(reportTime[item]===undefined) reportTime[item]=1;
            else reportTime[item]= reportTime[item]+1;
        }
    }
    // 정지당할 유저 이름 리스트
    let banList=[];
    
    for(let key in reportTime){
        const value = reportTime[key];
        if(value>=k) banList.push(key);
    }
    // 메일 받을횟수
    for(let key of id_list){
        let count=0;
        for(let item of banList){
            if(userInfo[key].has(item)) count++;
        }
        answer.push(count);
    }    
    
    return answer;
}