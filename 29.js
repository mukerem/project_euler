function distinctPowers(n) {
    let t = (n-1) * (n-1);
    const x = {};
    for(let a = 2; a*a <= n; a++){
        for(let b = a + 1; b <= n; b++){
            const c = Math.pow(a, b)
            // if(c > n) break
            if(c == Math.pow(b, a))
                x[c] = (x[c] || 0) + 2

        }
    }
    console.log(x)
    for(let a in x) t -= (x[a] - 1)
    return t;
  }
  
console.log(distinctPowers(5));
console.log(distinctPowers(15));
// console.log(distinctPowers(30));