function checkOutOfRange(x,y){
    return Math.abs(x) <=5 && Math.abs(y) <=5
}

function updateRoute(routes, newRoute){
    let check=true;
    for(const route of routes){
        if(route['from'][0]===newRoute['from'][0] && route['from'][1]===newRoute['from'][1]){
            if(route['to'][0]===newRoute['to'][0] && route['to'][1]===newRoute['to'][1]){
                check=false;
                break;
            }
        }
        if(route['to'][0]===newRoute['from'][0] && route['to'][1]===newRoute['from'][1]){
            if(route['from'][0]===newRoute['to'][0] && route['from'][1]===newRoute['to'][1]){
                check=false;
                break;
            }
        }
    }
    if(check) routes.push(newRoute);
    
    return check;
}

function solution(dirs) {
    var answer = 0;
    
    const commands = {
        'U': [0, 1],
        'D': [0, -1],
        'R': [1, 0],
        'L': [-1, 0]
    };
    let curPos =[0,0];
    // from to의 형태로 객체데이터를 저장할것임
    const routes=[];
    
    for(let i=0; i<dirs.length;i++){
        const route = {
            'from':[],
            'to':[],
        };
        const command = commands[dirs[i]];
        const nextPos = [curPos[0]+command[0], curPos[1]+command[1]];
        if(checkOutOfRange(nextPos[0],nextPos[1])){
            route['from']=curPos;
            route['to']=nextPos;
            if(updateRoute(routes,route)) answer++;
            curPos=route['to'];
        }

    }
    
    return answer;
}