const quickSort = (arr: number[]): number[] => {

    if(arr.length < 2 ) {
        return arr
    }

    const pivot: number = arr[arr.length-1]
    const left: number[] = []
    const right: number[] = []

    for (let i: number = 0; i < arr.length - 1; i++) {

        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(right), pivot, ...quickSort(left)]
}

const array: number[] = [1, 3, 2, 1, 0, 0, 3, 2, 4]

console.log(quickSort(array))