
function isprime(n){
    if(n < 2)return false
    for(let i=2; i*i <= n; i++)
        if(n%i == 0)
            return false
    return true
}
function truncatablePrimes(n) {
    let tot=0, c = 0, x = 11, digit = 2
    while(c < n){
        let y = x, d = true, z = digit;
        while(z){
            y = Math.floor(x / Math.pow(10, z-1))
            if(!isprime(y)){d=false;break}
            z--
        }

        z = 1

        while(z < digit && d){
            y = x % Math.pow(10, z)
            if(!isprime(y))d = false
            z++
        }
        if(d){
            tot += x
            c++
            // console.log(x)
        }
        x += 2
        if(x >= Math.pow(10, digit))digit++
    }
    return tot
  }
  
console.log(truncatablePrimes(8));
console.log(truncatablePrimes(11));