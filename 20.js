function sumFactorialDigits(n) {
    const l = n * Math.floor(Math.log10(n)) + n
    const d = new Array(l).fill(0)
    d[0] = 1
    let c = 0, x
    for(let v=2; v<=n; v++){
        for(let i=0; i<l; i++){
            x = (d[i] * v) + c;
            c = Math.floor(x / 10)
            d[i] = x % 10
        }
    }
    let sum = 0;
    for(let x of d) sum += x
    return sum;
  }
console.log(sumFactorialDigits(50));
console.log(sumFactorialDigits(75));
console.log(sumFactorialDigits(100));