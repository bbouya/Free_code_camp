function factorialize(num){

    var prod = 1;
    for(var i =1; i<= num ; i++){
        prod*=i;
    }
    return prod;
}

fact = factorialize(5);
console.log(fact);
