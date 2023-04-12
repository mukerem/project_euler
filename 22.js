function ascii_val(w){
    let t = 0;
    for(let i = 0; i<w.length; i++){
        t += (w.charCodeAt(i)-64)
    }
    return t;
}
function namesScores(arr) {
    arr.sort()
    let s = 0
    for(let i = 0; i<arr.length; i++){
        s += (i+1) * ascii_val(arr[i])
        // console.log(i, s)

    }
    return s;
  }
  
  // Only change code above this line
  const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
  const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];
  
console.log(namesScores(test1));
console.log(namesScores(test2));

const fs = require('fs');
const data = fs.readFileSync('p022_names.txt', 'utf8');
// console.log(data)
const test = data.split(",")
console.log(namesScores(test));