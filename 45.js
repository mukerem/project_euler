
function tri(n){
    return n * (n+1) / 2
}
function hex(n){
    return n * (2*n - 1)
}
function penta(n){
    return n * (3*n - 1) / 2;
}
function istri(x){
    let n = (-1 + (Math.sqrt(1 + 8*x))) / 2;
    n = Math.floor(n)
    return tri(n) == x
}
function ispentagon(x){
    let n = (1 + (Math.sqrt(1 + 24*x))) / 6;
    n = Math.floor(n)
    return penta(n) == x
}

function triPentaHexa(n) {

    const val = new Array()
    let k = 1;
    let c = 0, mx = 3;
    while(c < mx){
        let r = hex(k)
        if (ispentagon(r) && istri(r)){
            c++;
            val.push(r)
            console.log(k)
        }
        k++
    }
    console.log(val)
    return val[mx-1]
  }
  
console.log(triPentaHexa(40756));