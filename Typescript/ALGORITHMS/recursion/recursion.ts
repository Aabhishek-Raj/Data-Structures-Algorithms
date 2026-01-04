function print1(n: number) {
    console.log(n)
    print2(2)
}
function print2(n: number) {
    console.log(n)
    print3(3)
}
function print3(n: number) {
    console.log(n)
    print4(4)
}
function print4(n: number) {
    console.log(n)
}

// recursion
function print(n: number) {
    if(n > 4) return
    console.log(n)
    print(n+1)
}

print(1)