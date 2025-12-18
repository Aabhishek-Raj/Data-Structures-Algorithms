// @1
// Given n numbers "n" find the first "n" elements of the Fibonacci Sequence
const fibonacci = (n: number): number[] => {
    const fib: number[] = [0, 1]
    for (let i = 2; i < n ; i++) {
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}
console.log(fibonacci(7))


// @2
// Given an number 'n', find the n th element of the Fibonacci sequence
const recursiveFibonacci = (n: number): number => {
    if(n < 2) {
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

console.log(recursiveFibonacci(45))


// @3 
//Dianamic programing   //using memoization
const fib = (n: number, memo: {[key: number]: number} = {}): number => {
    if (n in memo) return memo[n]
    if(n < 2) return n
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
}

console.log(fib(50))



