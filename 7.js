function is_prime(n){
    for(let i = 2; i*i <= n; i++)
        if(n%i == 0)
            return false;
    return true;
}
function nthPrime(n) {

    let c = 0;
    let i = 2;
    while (c < n){
        if(is_prime(i))c++;
        i++;
    }
    return i-1;
  }
  
  console.log(nthPrime(10001));