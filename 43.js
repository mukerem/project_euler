let x = []
const prime =Array(2, 3, 5, 7, 11, 13, 17)
function perm(a, p){
    if(a.length > 3){
      const c = a.length
      const z = parseInt( a.slice(c - 3, c).join(""));
      if(z % prime[c-4]) return
    }
    if(a.length == p.length)x.push([...a])
    for(let u of p){
        if(!a.includes(u)){
            a.push(u)
            perm(a, p)
            a.pop()
        }
    }
}

// function divisible(a){
//   const p =Array(2, 3, 5, 7, 11, 13, 17)
//   for(let idx = 1; idx < a.length - 2; idx++){
//     const z = parseInt( a.slice(idx, idx + 3).join(""));
//     if (z % p[idx-1])
//       return 0
//   }
//   return parseInt(a.join(""))
// }

function substringDivisibility(n) {
  let ans = 0
  x = []
  const p = Array.from({length: n+1}, (_, i) => i)
  perm([], p)
  for(let a of x){
    // ans += divisible(a)
    ans += parseInt(a.join(""))
  }
  
  return ans;
}

console.log(substringDivisibility(5));
console.log(substringDivisibility(9));