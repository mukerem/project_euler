function isprime(n){
    if (n<2) return false;
    for(let i=2; i*i <= n; i++)
        if(n%i == 0)
            return false
    return true
  
}
function goldbachsOtherConjecture() {

  let n = 3, t;
  while(true){
    while(isprime(n))n += 2;
    t = 1
    let c = false

    while(2*t*t < n){
        if(isprime(n-2*t*t)){
            c = true
            break
        }
        t++
    }
    // console.log(n)
    if(c == false)
        return n
    n += 2
  }
}

console.log(goldbachsOtherConjecture());