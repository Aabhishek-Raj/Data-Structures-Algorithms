function fibonacci(n) {
    const fib = [0, 1]
    for( let i= 2 ; i<n ; i++){
        fib[i] = fib[i-1] + fib[i-2]
     }
     return fib

}
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(7))


function Factorial(n){
    let fact = 1
    for (let i= 2 ; i<=n ; i++){
        fact = fact * i
    }
    return fact
}
console.log(Factorial(0))
console.log(Factorial(1))
console.log(Factorial(5))

const arr = [ 1, 2, 3, 'hi there' ]
arr.push(3)
arr.pop()
arr.shift()
arr.unshift(9)

for (const it of arr ){
    console.log(it);
}
// map, filter, reduce, concat, slice, splice

const obj ={
    hi: 'SHUT UP', 
    hoi: 456,
    Say: function(){
        console.log(this.hi);
    }
}
obj.hey = 'good bye'
delete obj.hey

console.log(obj.hi);
console.log(obj['hoi']);
console.log(obj);
obj.Say()

//  Objects.keys() get the keys,
//  Objects.values() get the values, 
//  Objects.entries() get key value pairs



function isPrime(n){
    if(n < 2) {
        return false
    }
for (let i = 2; i < n; i++){
    if( n%i === 0 ) {
        return false
    }
}
return true 
}
console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));



function isPrime(n){
    if(n < 2) {
        return false
    }
for (let i = 2; i < Math.sqrt(n); i++){
    if( n%i === 0 ) {
        return false
    }
}
return true 
}
console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));




