function largestPrimeFactor(number) {
    let n = Math.ceil(Math.sqrt(number));
    let ans = number;
    for(let i=2; i<n; i++){
        while(number % i == 0) {
            number /= i;
            ans = i;
        }
    }

    return ans;
  }
  
  console.log(largestPrimeFactor(600851475143));
