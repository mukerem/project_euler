const a = new Array(2000001).fill(-1);
a[1] = 1;

function collatz(n){
    if(n == 1)return 1;
    if(n < a.length && a[n] != -1)
        return a[n];
    let x;
    if(n % 2 == 0) x = collatz(n / 2) + 1;
    else x =  collatz(3*n + 1) + 1;
    if(n < a.length) a[n] = x;
    return x;
}
function longestCollatzSequence(limit) {
    
    let max = 1, c = 1;
    for(let i = 2; i <= limit; i++){
        const b = collatz(i);
        // console.log(i, b)
        if(b > c){
            c = b;
            max = i;
        }
    }
    return max;

  }
  
  console.log(longestCollatzSequence(14));
  console.log(longestCollatzSequence(1000000));
  