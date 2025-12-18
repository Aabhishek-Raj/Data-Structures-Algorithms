
// @Array reversal
const array: number[] = [1, 2, 3, 4, 8, 7]

const arrayReversal = (arr: number[]): void => {
    let start: number = 0
    let end: number = arr.length - 1

    while (start < end) {
        const temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start ++
        end--
    }
    console.log(arr)
}

// @Sorting of an array
const arraySorting = (arr: number[]) => {

}

// @Second Largest element 
const secondlargest = (arr: number[]): number => {
    let largest: number = arr[0]
    let second: number = arr[0]

    for(let i = 0; i< arr.length; i++) {
        if(arr[i] > largest){
            second = largest
            largest = arr[i]
        } else if(arr[i] > second && arr[i] !== largest){
            second = arr[i]
        }
    }
    console.log(second)
    return second
}

secondlargest(array)

