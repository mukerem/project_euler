function ispalendrom(n){
    let x = n.toString();
    let y = x.split("").reverse().join("");
    // console.log(x, y);
    return x == y;
}
function largestPalindromeProduct(n) {
    const e = Math.pow(10, n);
    const s = Math.pow(10, n-1);
    let pal = [];
    for(let x = s; x < e; x++){
        for(let y = s; y < e; y++){
            let z = x * y;
            if(ispalendrom(z))pal.push(z);
        }
    }
    return Math.max(...pal);
    
  }
  
console.log(largestPalindromeProduct(3));