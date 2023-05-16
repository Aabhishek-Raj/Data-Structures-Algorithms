const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr 
    }

    const leftArr = arr.slice(0, Math.floor(arr.length / 2))
    const rightArr = arr.slice(Math.floor(arr.length / 2 ))

    return merge(mergeSort(leftArr), mergeSort(rightArr))

}

const merge = (left, right) => {
    const sortedArray = []

    while(left.length && right.length) {
        if( left[0] <= right[0]) {
            sortedArray.push(left.shift())
        } else {
            sortedArray.push(right.shift())
        }
    }
    return [...sortedArray, ...left, ...right]
}



const arr = [5, -3, -9, 9, 1, 8, 0, 7, -7]
console.log(mergeSort(arr))
