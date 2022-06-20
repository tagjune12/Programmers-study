function solution(enroll, referral, seller, amount) {
  const sellers = {};

  for (let i = 0; i < enroll.length; i++) {
    const name = enroll[i];
    const parent = referral[i];

    sellers[name] = {
      parent,
      earn: 0,
    };
  }

  // loop
  const dfs = (start) => {
    const stack = [start];
    const visited = [start[0]];

    while (stack.length > 0) {
      const [sellerName, profit] = stack.pop();

      if (sellerName === '-') continue;
      else if (!visited.includes(sellers[sellerName].parent)) {
        const money = Math.floor(profit * 0.1);
        const parent = sellers[sellerName].parent;
        sellers[sellerName].earn += profit - money;
        if (money === 0) continue;
        stack.push([parent, money]);
        visited.push(parent);
      }

    }
  }

  for (let i = 0; i < seller.length; i++) {
    const sellerName = seller[i];
    const profit = amount[i] * 100;
    dfs([sellerName, profit]);
  }

  return Object.entries(sellers).map(info => info[1].earn);
}