function selfPowers(power, lastDigits) {
    const MOD = Math.pow(10, lastDigits)
    let n = 0
    for(let i= 1; i<= power; i++){
        let c = 1;
        for(let j=0; j<i; j++){
            c *= i
            c = c % MOD
        }
        n = (n+c) % MOD
    }

    return n;
  }
  
console.log(selfPowers(1000, 10));
console.log(selfPowers(10, 10)); // 10405071317