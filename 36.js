function doubleBasePalindromes(n) {
    let tot=0
    for(let i=0; i<n; i++){
        let a = i.toString()
        if(a != a.split("").reverse().join("")) continue
        let b = "", c=i
        while(c){
            b += (c%2).toString()
            c = Math.floor(c / 2)
        }
        if(b == b.split("").reverse().join("")) tot += i
    }
    return tot;
  }
  
console.log(doubleBasePalindromes(1000000));