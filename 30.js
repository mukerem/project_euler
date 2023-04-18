function check(n, p){
    let q = 0;
    const a = n
    while(n > 0){
        const r = n % 10
        n = Math.floor(n/10)
        q += Math.pow(r, p)
    }
    return a == q 

}
function digitnPowers(n) {
    let sum = 0, s, e = Math.pow(10, n+1)
    for(s = 2; s < e; s++){
        sum += check(s, n) ? s : 0
    }
    return sum;
  }
  
console.log(digitnPowers(4));
console.log(digitnPowers(5));