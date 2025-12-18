// @1 
// Given an integer "n", find the factorial of that integer
const factorial = (n: number): number => {
    let result = 1
    for (let i = 0; i < n; i++ ) {
        
        result = result * 1 
    }
    return result
}

// @2
//with resursion
const recursiveFactorial = (n: number): number => {    //3! = 3 * 2     3 * 2! 
    if(n==0) {                                         //2! = 2 * 1     2 * 1!
        return 1                                       //1! = 1 * 1     1 * 0!                                                  
    }   
                                                      // n! = n * (n-1)!
    return recursiveFactorial(n-1) * n
}