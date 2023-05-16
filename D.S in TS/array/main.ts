const nums: number[] = []
const arr: number[] = [1,3,4,0,0,0,0]
const fruits: string[] = ["Banana", "Orange", "Apple", "Mango"]

nums[0] = 1
nums[1] = 2
nums[2] = 3

// O(n)
nums.push(4)
nums.push(5)

// O(n)
nums.unshift(0)
nums.unshift(-1)

nums.shift()

//DELETE- O(n)
nums.splice(2, 1)

//sort method
const sorted = arr.sort((a, b) => (a - b))

// console.log(nums)


//+++++++++++++++++++//

const str: string = "helloThere"

//Promise
const newPromise = new Promise((resol, rejec) => {
    if(true) {
        resol("right !!")
    } else{
    rejec("Wrong !!")
    }
})

newPromise
    .then(res => console.log(res))
    .catch(rej => console.log(rej))

//reduce
const newarr = arr.reduce((acc, curr) => acc + curr, 0) 
console.log(newarr)
