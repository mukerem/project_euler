const f = {
    0:1, 1:1, 2:2, 3:6, 4:24, 5:120,
    6:720, 7:5040, 8: 40320, 9: 362880
}
function sumdigitfactorial(n){
    let s = 0;
    while (n){
        s += f[n%10]
        n = Math.floor(n/10)
    }
    return s
}
function digitFactorial() {
    var sum = 0;
    var numbers = [];
    for(let i=3; i<3628800; i++){
        if(sumdigitfactorial(i) == i){
            numbers.push(i)
            sum += i
        }
    }
    return {sum, numbers}
  }
  
console.log(digitFactorial());