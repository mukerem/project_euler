const dp = new Array(10000).fill(new Set())
function  sum(c, a, z){
    if(a == 0)return z
    if(a < 0) return 0
    if(dp[a] > 0) return dp[a] 
    let t = {}
    for(let x of c){
        if(a >= x){
            z.push(x)
            const f = sum(c, a-x)
            t.add(f)
        }

    }
        // t += sum(c, a-x)
    dp[a] = f
    return dp[a]
}
function coinSums(n) {
    const c = [1,2,5,10,20,50,100,200]
    return sum(c, n);
}
  
console.log(coinSums(30));
console.log(coinSums(200));
