function fiboEvenSum(n) {

    let a = 1, b = 2;
    let tot = 0;
    while (b <= n){
        if (b % 2 == 0) tot += b;
        let c = b;
        b += a;
        a = c;
    }
    return tot;
  }

console.log(fiboEvenSum(4000000));
// console.log(fiboEvenSum(60));