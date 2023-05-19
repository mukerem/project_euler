function intRightTriangles(p) {
    const x = {}
    for(let a = 1; a <= p/3; a++){
        for(let b = a; b <= p/2; b++){
            const c = a*a + b*b;
            const d = Math.floor(Math.sqrt(c))
            const k = a+b+d
            if(d*d == c && k <= p)
            x[k] = (x[k] | undefined) + 1
        }
    }
    // console.log(x)
    const ans = Object.keys(x).reduce((a, b) => x[a] > x[b] ? a : b);
    ans = parseInt(ans)
    return ans

  }
  
console.log(intRightTriangles(500));
console.log(intRightTriangles(1000));