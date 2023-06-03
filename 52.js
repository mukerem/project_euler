function permutedMultiples(n) {
    let a = 2, i;
    while(1){
        const f = {
            ...Array.from({ length: 10 }, (u, v) => 0)
          };
        //   data = {...Array(10).fill(0)}

        let k = a, tr=true, c;
        while(k){f[k%10]++; k = Math.floor(k/10)}
        for(i = 2; i<= n; i++){
            const data = {...Array(10).fill(0)}
            k = a * i;
            while(k){
                data[k%10]++;k = Math.floor(k/10)
            }
            for(let j=0; j<10; j++)
                if(f[j] != data[j])
                    tr = false;
        }
        if(tr) return a;
        a++
    }

    return true;
  }
  
console.log(permutedMultiples(2));
console.log(permutedMultiples(6));
