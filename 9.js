function specialPythagoreanTriplet(n) {
    let sumOfabc = n;
    for(let a= 1; a <= n / 3; a++){
        const k = n - a;
        const z = a * a;
        if(z % k == 0){
            const x = z / k;
            const c = (k+x) / 2;
            const b = c - x;
            return a * b * c;
        }
    }
   
   }
   
   console.log(specialPythagoreanTriplet(1000));