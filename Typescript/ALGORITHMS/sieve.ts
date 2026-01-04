// Sieve of Eratosthenes
// If a number is not prime, it must be a multiple of a smaller prime

function sieveOfEratosthenes(num: number): number[] {

    const isPrime: boolean[] = new Array(num + 1).fill(true)

    // 0 and 1 are not prime
    isPrime[0] = false;
    isPrime[1] = false;

    for(let i = 2; i * i <= num; i++) {
        if(isPrime[i]) {
            //mark multiples of i
            for(let j = i * i; j <= num; j += i) {
                isPrime[j] = false
            }
        }
    }
    // collect primes
    const primes: number[] = [];
    for (let i = 2; i <= num; i++) {
        if (isPrime[i]) primes.push(i);
    }

    return primes;
}

console.log(sieveOfEratosthenes(40))