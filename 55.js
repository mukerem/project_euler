
function islychre(n){
    let f = n;
    let s = n.toString()
    let k = s.split("").reverse().join("");
    n = n + parseInt(k);
    for(let i=2; i<50; i++){
        let s = n.toString()
        let k = s.split("").reverse().join("");
        // console.log(s, k)
        // if(s === k){console.log(s, k, i, f);return 1;}
        if(s === k)return 1;
        n = n + parseInt(k);
    }
    return 0;
}
function countLychrelNumbers(num) {
    // const islychre = new Array(num+1).fill(false);
    let c = 0;
    for(let i=1; i<=num; i++){
        c += islychre(i);
    }
    return num-c;
  }
  
console.log(countLychrelNumbers(10000));
console.log(countLychrelNumbers(1000));