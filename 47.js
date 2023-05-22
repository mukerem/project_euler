function isprime(n){
    if (n<2) return false;
    for(let i=2; i*i <= n; i++)
        if(n%i == 0)
            return false
    return true
  
}
function primefactorization(n){
    let k = 2;
    const m = {}
    while(k*k <= n){
        let r = 0
        while(n%k == 0) {n/= k; r++}
        if(r)m[k]=r;
        k++;
    }
    if(n > 1)m[n] = 1

    const p = []
    for(let i in m)p.push(Math.pow(i, m[i]));
    return p;
}
function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {
    let n = 1, start
    const pr = [[0]]
    for(let i = 0; i<targetConsecutive-1; i++){
        const r = primefactorization(n);
        if(r.length != targetNumPrimes)pr.push([-1])
        else pr.push(r)
        n++
    }
    while(true){
        const s = new Set()
        let inv = false

        const r = primefactorization(n);
        if(r.length != targetNumPrimes)pr.push([-1])
        else pr.push(r)

        start = n-targetConsecutive+1

        for(let i=start; i<=n; i++){
            if(pr[i].length != targetNumPrimes){
                inv = true;
                break
            }
            for(let u of pr[i])s.add(u)
        }
        if(inv == false && s.size === (targetNumPrimes * targetConsecutive))
            return start
        n++
        // console.log(s)
    }
    
  }
  
console.log(distinctPrimeFactors(2,2));
console.log(distinctPrimeFactors(4, 4));