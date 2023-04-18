function spiralDiagonals(n) {
    let ans = 1
    let k = 1, p= 2
    while(k < n*n){
        for(let i= 0; i<4; i++){
            k += p
            ans += k
        }
        p += 2
    }
    return ans;
  }
  
console.log(spiralDiagonals(5));
console.log(spiralDiagonals(1001));