let x = []
function perm(a, p){
    if(a.length == p.length)x.push([...a])
    for(let u of p){
        if(!a.includes(u)){
            a.push(u)
            perm(a, p)
            a.pop()
        }
    }
}

function is_prime(n){
  if (n < 2)return false
  for(let i=2; i*i <= n; i++)
    if (n%i == 0) return false
  return true
}
function multi(a, n){
    let i=0, r = 1
    const p = []
    for(let k of a){
        let z = 0
        for(let j=0; j<k; j++){
            z = z * 10 + n[i++]
        }
        p.push(z/r)
        r++
    }
    const y = p[0]
    for(let u of p){
        if(u !== y) return false
    }

    return true
}

function pandigitalPrime(k) {
    x = []
    const p = Array.from({length: k}, (_, i) => i + 1)
    perm([], p)
    let ans = 0
    for(let a of x){
        let z = 0
        for(let f of a) z = z * 10 + f
        if(is_prime(z))  
          ans = Math.max(ans, z)
            

    }
    return ans;
  }
for(let i=1; i<10; i++)
  console.log(pandigitalPrime(i));
console.log(pandigitalPrime(7));
// console.log(pandigitalPrime(9));