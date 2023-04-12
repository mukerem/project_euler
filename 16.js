function powerDigitSum(exponent) {

    let s = "1";
    for(let i = 0; i<exponent; i++){
        let x = "", y = s.split("").reverse(), c = 0;
        for(let j of y){
            let u = c + parseInt(j) * 2;
            let v = u % 10;
            c = Math.floor(u / 10);
            x += v.toString();
        }
        if (c) x += c.toString();
        s = x.split("").reverse().join("")
        // console.log(i, s);
    }
    let sum = 0;
    for(let j of s)
        sum += parseInt(j);
    return sum;
  }
  
console.log(powerDigitSum(5));
console.log(powerDigitSum(15));
console.log(powerDigitSum(1000));