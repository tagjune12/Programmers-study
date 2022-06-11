/*
    money = 생산해야하는 금액
    costs = 생산단가
    return 최소비용
    단, 금액초과 안됨
*/
function solution(money, costs) {

    let answer = 0;
    const coins = [1, 5, 10, 50, 100, 500];
    let remainMoney = money;
    // const productionCost = [];

    while (remainMoney !== 0) {
        let minCost = Number.POSITIVE_INFINITY;
        let minCostCoin = 0;

        for (let i = costs.length - 1; i >= 0; i--) {
            const coin = coins[i];
            const divide = Math.floor(remainMoney / coin);
            console.log(remainMoney, coin);

            if (divide === 0) {
                // productionCost.push(Number.POSITIVE_INFINITY);
                continue;
            }
            else {
                // productionCost.push(costs[i]*divide);
                const cost = costs[i] * divide;
                if (cost < minCost) {
                    console.log("remain", remainMoney, coin, minCost, cost);
                    minCost = cost;
                    minCostCoin = coins[i];
                }
            }

        }

        console.log(minCostCoin, minCost);
        remainMoney %= minCostCoin;
        answer += minCost;
        console.log("\n")
    }

    return answer;
}

const money = 1999;
const costs = [2, 11, 20, 100, 200, 600];

solution(money, costs)