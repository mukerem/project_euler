
function check(a, n){
    const d = {}
    // console.log(a, n)
    for(let x of a){
        while(x){
            const r = x %10
            x = Math.floor(x / 10)
            if(r in d) return false
            if(r > n || r == 0)return false
            d[r] = 1
            // console.log(r, x, d)
        }
    }
    // console.log(a, Object.keys(d).length)
    return n == Object.keys(d).length
}
function pandigitalProducts(n) {

    const s = new Set();
    for(let x = 2; x < 99; x++){
        if(x%10 == Math.floor(x / 10))continue
        for(let y = 3; y <10000; y++){
            const z = x * y;
            if(check([x, y, z], n))s.add(z)
        }
    }
    let sum = 0
    for(let a of s) sum += a
    return sum
  }
  
console.log(pandigitalProducts(4));
console.log(pandigitalProducts(9));