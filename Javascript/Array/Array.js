let fruits = ['apple', 'pine apple', 'banana']


fruits.push('water melon')
fruits.pop()

fruits.unshift("mango")
fruits.shift()

let index = fruits.indexOf("pine apple")

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i], )
}

for(let furit of fruits) {
    console.log(furit)
}

fruits.sort().reverse()

let temp = fruits[0]
fruits[1] = "banana"

console.log(fruits)
console.log(index)