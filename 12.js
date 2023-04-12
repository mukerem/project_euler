function seive(N){
    const prime = new Array(N+1).fill(true);
    prime[0] = false
    prime[1] = false
    for(let p = 2; p*p <= N; p++){
        if(prime[p] == false) continue;
        for(let k = p*p; k <= N; k += p) prime[k] = false;
    }
    let prime_list = [];
    for(let p = 2; p<= N; p++)
        if(prime[p])
            prime_list.push(p);
    return prime_list;
}
function count_divisor(prime, n){
    let t = 1;
    for(let p of prime){
        if(n == 1)break;
        let c = 0;
        while (n%p == 0){
            n /= p;
            c++;
        }
        t *= (c+1);
    }
    return t;
}
function divisibleTriangleNumber(n) {
    const prime = seive(2000000);
    // console.log(prime);
    let div = [];
    div[1] = 1; 
    div[2] = 2; 
    let x = 2;
    let count = 0;
    while (count <= n){
        div[x] = count_divisor(prime, x);
        if(x % 2 == 1)
            count = div[x] * div[(x-1)/2]
        else
            count = div[x-1] * div[x/2]
        x++;
    }
    x--;
    // console.log(div);
    return x * (x-1) / 2

    
  }
  
console.log(divisibleTriangleNumber(500));
console.log(divisibleTriangleNumber(1));
console.log(divisibleTriangleNumber(2));
console.log(divisibleTriangleNumber(3));
console.log(divisibleTriangleNumber(4));
console.log(divisibleTriangleNumber(5));