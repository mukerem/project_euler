function proper_divisor_sum(n){
    let sum = 1 // start from 2
    for(let i = 2; i*i <= n; i++){
        if(n % i == 0){
            sum += i;
            if(i * i != n){
                sum += n / i
            }
        }
    }
    return sum

}

function sumOfNonAbundantNumbers(n) {
    const abundant = []
    for(let i = 1; i <= n; i++){
        if(proper_divisor_sum(i) > i) abundant[abundant.length] = i;
    }
    let sum = 0
    const nums = new Array(n+1).fill(false);
    for(let x of abundant){
        for(let y of abundant){
            const z = x + y;
            if(z > n)break
            nums[z] = true;
        }
    }
    for(let i=1; i<=n; i++)
        if(!nums[i]) sum += i;
    return sum

  }
  
console.log(sumOfNonAbundantNumbers(28123));