const permutations = []
function perm(arr, p, k){
    if(p.length == k){
        permutations.push([...p])
        return
    }
    for(let x of arr){
        if(!p.includes(x)){
            p.push(x)
            perm(arr, p, k)
            p.pop()
        }
    }
}
function lexicographicPermutations(n) {
    
    let s = 0;
    for(let x of permutations[n])
        s = s * 10 + x;
    return s
  }
const d = [0,1,2,3,4,5,6,7,8,9]
perm(d, [], d.length)

console.log(lexicographicPermutations(699999))
console.log(lexicographicPermutations(999999))
// console.log(lexicographicPermutations(1000000))