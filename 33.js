function gcd(a, b){
    if(b == 0)return a
    return gcd(b, a%b)
}
function digitCancellingFractions() {
    let r=1, t = 1
    for(let x = 10; x < 100; x++){
        if(x%10 == 0)continue
        for(let y=x+1; y<100; y++){
            if(y%10 == 0)continue
            let a = x%10, b = Math.floor(x/10), c = y%10, d = Math.floor(y/10)
            if(x*c == y * a && b == d || x*c == y * b && a == d
                 ||x*d == y * a && b == c ||x*d == y * b && a == c){
                const h = gcd(x, y)

                r *= (x/h)
                t *= (y/h)
                const g = gcd(r, t)
                console.log(r, t, g, x, y)
                r /= g
                t /= g

            }
        }
    }
    return t
  }
  
console.log(digitCancellingFractions());