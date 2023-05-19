function NthCharacter(n) {
    let length = 0;
    let number = 1;
    let sum = 1
   
    // loop until the length of the concatenated string is less than or equal to n
    while (length < n) {
      // calculate the length of the current number
      let currentLength = Math.floor(Math.log10(number)) + 1;
   
      // if the concatenated length + current length is greater than or equal to n, break the loop
      
      const x = Math.floor(Math.log10(length)), y = Math.floor(Math.log10(length + currentLength))
      if(x != y){
        const d = Math.pow(10, y)
        sum *= parseInt(number.toString()[d - length - 1]);
        // console.log(d, currentLength, length)
      }
      if (length + currentLength >= n) {
        break;
      }
   
      // add the current length to the concatenated length
      length += currentLength;
   
      // move to the next number
      number++;
    }
   
    // calculate the position of the N-th character in the number
    // let position = n - length - 1;
   
    // // convert the number to a string
    // let numStr = number.toString();
   
    // // return the N-th character
    // return numStr[position];
    return sum
  }
  
  function champernownesConstant(n) {
  
    return NthCharacter(n)
  }
    
  console.log(champernownesConstant(100));
  console.log(champernownesConstant(1000000));