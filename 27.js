function seive(N){
    const prime = new Array(N+1).fill(true);
    prime[0] = false;
    prime[1] = false;
    for(let i=2; i*i <= N; i++){
        if(prime[i] == false) continue
        for(let p=i*i; p <= N; p += i)
            prime[p] = false
        
    }
    return prime;

}
function quadraticPrimes(range) {
    const prime = seive(1000000);
    let max = -1, ans = 0;
    for(let b = 2; b < range; b++){
        if(prime[b] == false)continue
        for(let a = -range + 1; a < range; a++){
            let n = 1;
            while(prime[n*n + a*n + b])n++;
            if(n > max){
                max = n;
                ans = a * b
            }

        }
    }
    return ans;
  }
  
console.log(quadraticPrimes(1000));

//   n^2 + an + b