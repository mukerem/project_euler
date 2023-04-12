function solve(n){
    let a = 0;
    if(n == 0) return a
    if(n > 100 && n % 100 != 0) a+= 3;
    const word1 = [0,3,3,5,4,4,3,5,5,4,3,6,6,8,8,7,7,9,8,8]
    const word2 = [0,0,6,6,5,5,5,7,6,6]
    if(n >= 100){
        a += word1[Math.floor(n / 100)] + 7;
        n = n % 100;
    }
    if(n<20) {
        a += word1[n];
        return a;
    }
    a += word2[Math.floor(n / 10)] + word1[n%10]
    return a
}

function convert(n){
    if(n == 0) return 4;
    const word1 = [4,3,3,5,4,4,3,5,5,4,3,6,6,8,8,7,7,9,8,8]
    const word2 = [0,0,6,6,5,5,5,7,6,6]
    // hundred = 7
    // thousand = 8
    // million = 7
    const mul = [0, 8, 7, 7, 8]; // for thousand, million, billion, ...
    let tot = 0, idx = 0;
    if(n > 1000 && n % 1000 < 100) tot += 3;
    while(n){
        const m = n % 1000;
        tot += solve(m) + mul[idx];
        n = Math.floor(n / 1000);
        idx++;
    }
    // console.log(tot)
    return tot;
}
function numberLetterCounts(limit) {
    
    let s = 0;
    for(let i = 1; i <= limit; i++)
        s += convert(i);

    return s;
  }
  
console.log(numberLetterCounts(5));
console.log(numberLetterCounts(1000));