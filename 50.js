function seive(n){
    const is_prime = new Array(n+1).fill(true);
    is_prime[0] = true; is_prime[1] = false;
    for(let i = 2; i*i <= n; i++){
        if(is_prime[i] == false) continue
        for(let j = i*i; j<= n; j += i){
            is_prime[j] = false
        }
    }
    return is_prime;

}
function consecutivePrimeSum(limit) {
    const is_prime = seive(limit);
    const prime = []
    for(let i = 2; i<= limit; i++)
        if(is_prime[i])
            prime.push(i)
    const sum = [0]
    let t = 0
    for(let a of prime){
        t += a;
        if(t > limit)break;
        sum.push(t)
    }
    let ans = 0, num = null
    for(let i = 1; i<sum.length; i++){
        for(let j = 1; j<i; j++){
            const d = sum[i] - sum[j-1]
            if(is_prime[d]){
                if(ans < i-j+1){
                    ans = i-j+1
                    num = d
                }
                break
            }
        }
    }
    // console.log(sum)
    return num

    
  }
  
console.log(consecutivePrimeSum(1000000));
console.log(consecutivePrimeSum(100));