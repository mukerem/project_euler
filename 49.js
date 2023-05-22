const combinations = []
let permutations = new Set()

function combinationWithReplacement(arr, p, k, idx, cur){
    if(idx == k){
        combinations.push([...p])
        return
    }
    if (cur >= arr.length)
        return
    
    p[idx] = arr[cur]
    combinationWithReplacement(arr, p, k, idx+1, cur)
    combinationWithReplacement(arr, p, k, idx, cur+1)
}

function nums(arr, p){
    let a = 0;
    for(let i of p){
        a = a * 10 + arr[i];
    }
    return a
}

function get_permutations(arr, p, k){
    if(p.length == k){
        // if(p[0] == 0)return
        permutations.add(nums(arr, p))
        return
    }
    for(let i=0; i<arr.length; i++){
        if(!p.includes(i)){
            p.push(i)
            get_permutations(arr, p, k)
            p.pop()
        }
    }
}


function isprime(n){
    if (n<2) return false;
    for(let i=2; i*i <= n; i++)
        if(n%i == 0)
            return false
    return true
  
}

function primePermutations() {
    const solution = []

    const d = [0,1,2,3,4,5,6,7,8,9]
    const p = new Array(4).fill(null)
    combinationWithReplacement(d, p, 4, 0, 0)
    // console.log(combinations.length, combinations[714])
    for(let a of combinations){
        permutations = new Set()
        get_permutations(a, [], 4);
        permutations = Array.from(permutations);
        for(let i = 0; i < permutations.length; i++){
            const u = permutations[i];
            if(!isprime(u)) continue;
            for(let j = 0; j < i; j++){
                const v = permutations[j];
                if(!isprime(v)) continue;
                for(let k = 0; k < j; k++){
                    const w = permutations[k]
                    if(u - v != v - w) continue;
                    if(!isprime(w)) continue;
                    // solution.push(String(w).padStart(4, '0') + String(v).padStart(4, '0') + String(u).padStart(4, '0'));
                    solution.push(w*Math.pow(10, 8) + v*Math.pow(10, 4) + u)
                }
            }
        }
    }
    console.log(solution)
    return solution[solution.length-1]
  }
  
console.log(primePermutations());