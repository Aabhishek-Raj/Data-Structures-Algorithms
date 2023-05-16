function quickSort(arr) {

    if(arr.length < 2) {
        return arr
    }

    const pivot = arr[arr.length - 1]
    const left = []
    const right = []

    for (let i= 0; i < arr.length-1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
            
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

const array = [1, 3, 3, 2, 5, 5, 2, 1, 0, 0, 0]

console.log(quickSort(array))