
function add(x, y){
    x = x.split("").reverse()
    y = y.split("").reverse()
    if(x.length < y.length) for(let i=0; i<y.length - x.length; i++)x.push("0")
    if(x.length > y.length) for(let i=0; i<x.length - y.length; i++)y.push("0")
    let z = [], c = 0, a;
    for(let i=0; i<x.length; i++){
        a = c + parseInt(x[i]) + parseInt(y[i]);
        z.push((a%10).toString())
        c = Math.floor(a / 10)
    }
    if(c) z.push(c.toString())
    return z.reverse().join("")

}
function digitFibonacci(n) {

    const fib = ["0", "1"]
    let idx = 1
    while(fib[idx].length < n){
        fib.push(add(fib[idx], fib[idx-1]))
        idx++
    }
    return idx
  }
  
console.log(digitFibonacci(20))
console.log(digitFibonacci(1000))