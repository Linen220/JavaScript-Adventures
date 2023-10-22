var maxProfit = function(prices) {
  
    let maxProfit = 0;
    let minBuy = prices[0];

    for (let i = 1; i < prices.length; i++) {
        minBuy = Math.min(minBuy, prices[i])
        maxProfit = Math.max(maxProfit, prices[i] - minBuy );
    }

    return maxProfit;
};


// const prices = [7,1,5,3,6,4];
const prices = [2,4,1];

console.log(maxProfit(prices));