function factorization(n){
    const e = Math.ceil(Math.sqrt(n));
    let m = {};
    for(let i = 2; i <= e; i++){
        let k = 0;
        while(n%i == 0){
            n = n / i;
            k++;
        }
        if(k > 0) m[i] = k;
    }
    if(n > 1)m[n] = 1;
    // console.log(n, m);
    return m;
}
function smallestMult(n) {
    let m = {};
    for(let i = 2; i <= n; i++){
        let s = factorization(i);

        for(let k in s){
            if(m.hasOwnProperty(k)) m[k] = Math.max(m[k], s[k]);
            else m[k] = s[k];
        }
    }
    // console.log(m);
    let ans = 1;
    for(let i in m) ans *= Math.pow(i, m[i]);
    return ans;
  }
  
  console.log(smallestMult(20));