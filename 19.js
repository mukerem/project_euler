function isleap(y){
  if(y % 100 == 0) return false
  if(y % 400 == 0) return true;
  return y % 4 == 0
}
function solve(year){
  const days = [31,-1,31,30,31,30,31,31,30,31,30,31]
  let c = 0, d = 2;
  for(let y=1901; y<= year; y++){
      for(let m = 0; m< 12; m++){
          c += d?0:1;
          if(m == 1) d += isleap(y)?29: 28;
          else d += days[m];
          d %= 7;
      }
  }
  return c;
}
function countingSundays(firstYear, lastYear) {
  return solve(lastYear) - solve(firstYear-1);
}

console.log(countingSundays(1943, 1946));
console.log(countingSundays(1901, 2000));