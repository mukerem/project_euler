function multiplesOf3and5(number) {
    number--;
    const v = [3, 5, -15];
    let tot = 0;
    for(let x of v){
        let n = Math.floor(number / Math.abs(x));
        tot += x * (n * (n + 1) / 2);
    }
    return tot;    
}

console.log(multiplesOf3and5(1000));
console.log(multiplesOf3and5(100));
