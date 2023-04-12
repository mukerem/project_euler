function primeSummation(n) {

    const prime = new Array(n).fill(true);
    prime[0] = false;
    prime[1] = false;
    for(let i=2; i*i < n; i++){
        if(prime[i] == false)continue;
        for(let j = i*i; j < n; j += i){
            prime[j] = false;
        }
    }
    let sum = 0;
    for(let i=2; i< n; i++)
        if(prime[i])
            sum += i;
    return sum;

  }
  
  console.log(primeSummation(2000000));