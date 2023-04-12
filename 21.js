function proper_divisor_sum(n){
    let sum = 1 // start from 2
    for(let i = 2; i*i <= n; i++){
        if(n % i == 0){
            sum += i;
            if(i * i != n){
                sum += n / i
            }
        }
    }
    // console.log(n, sum)
    return sum

}
function sumAmicableNum(n) {

    let tot = 0;
    for(let i=2; i<n; i++){
        const x = proper_divisor_sum(i);
        if(x != i && proper_divisor_sum(x) == i && x < n) tot += i
    }
    return tot
  }
  
console.log(sumAmicableNum(10));
console.log(sumAmicableNum(1000));
console.log(sumAmicableNum(2000));
console.log(sumAmicableNum(5000));
console.log(sumAmicableNum(10000));