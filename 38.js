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
function find_interval(n){
    const a = []
    for(let i=2; i<= 5; i++){
        if(n%i == 0){
            const c = new Array(n/i).fill(i)
            a.push(c)
        }
        if((n+1)%i == 0){
            const c = new Array((n+1)/i).fill(i)
            c[0] -= 1
            a.push(c)
        }
        if((n-1)%i == 0){
            const c = new Array((n-1)/i).fill(i)
            c[c.length-1] += 1
            a.push(c)
        }
    }
    let set  = new Set(a.map(JSON.stringify));
    let arr2 = Array.from(set).map(JSON.parse);
    return arr2
}
function pandigitalMultiples(k) {
    x = []
    // const p = Array.from([...Array(10).keys()])
    // const p = [...Array(10).keys()]
    const p = Array.from({length: k}, (_, i) => i + 1)
    perm([], p)
    const interval = find_interval(k)
    // console.log(x.length)
    let ans = 0
    for(let a of x){
        // console.log(a)
        for(let u of interval){
            if(multi(u, a)){
                let z = 0
                for(let f of a) z = z * 10 + f
                ans = Math.max(ans, z)
                // console.log(z)
            }
        }
    }
    return ans;
  }
  
console.log(pandigitalMultiples(4));
console.log(pandigitalMultiples(8));
console.log(pandigitalMultiples(9));