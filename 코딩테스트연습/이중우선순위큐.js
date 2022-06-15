function solution(operations) {
  const queue = [];
  
  operations.forEach(operation=>{
      const [action, value] = operation.split(" ");
      if(action==='I'){
          queue.push(parseInt(value));
          queue.sort((valueA, valueB)=> (valueA - valueB));
      } else{
          if(queue.length>0){
              if(value==="1") queue.pop();
              if(value==="-1") queue.shift();
          }
      }
  });
  
  return queue.length===0? [0,0] : [queue[queue.length-1],queue[0]];
}