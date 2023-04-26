function prime_generate(n) {

    const prime = new Array(n+1).fill(true);
    prime[0] = false;
    prime[1] = false;
    for(let i=2; i*i <= n; i++){
        if(prime[i] == false)continue;
        for(let j = i*i; j <= n; j += i){
            prime[j] = false;
        }
    }
    return prime

  }
  
function circularPrimes(n) {
    const prime = prime_generate(1000000)
    let tot=0
    for(let i=2; i<= n; i++){
        const digit = Math.floor(Math.log10(i))
        let t=true, b=i
        for(let j=0; j<=digit; j++){
            if(!prime[b]){t=false; break}
            b = Math.pow(10, digit) * (b%10) + Math.floor(b / 10)
        }
        // console.log()
        if(t)tot++;
    }

    return tot;
  }
  
console.log(circularPrimes(150));
console.log(circularPrimes(1000000));
