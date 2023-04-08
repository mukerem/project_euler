function sumSquareDifference(n) {
    let a = n * (n + 1) / 2;
    a *= a;

    let b = n * (n + 1) * (2*n + 1) / 6;
    return a - b; 
  }
  
  console.log(sumSquareDifference(100));
  console.log(sumSquareDifference(10));