
const arrToSort: number[] = [5, -3, -9, 9, 1, 8, 0, 7, -7]


//MergeSort =>

const mergeSort = (arr: number[]): number[] => {

    if (arr.length <= 1) return arr

    const mid = Math.floor(arr.length / 2)

    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

const merge = (left: number[], right: number[]): number[] => {
    const result: number[] = []
    let i = 0
    let j = 0

    // merge while both arrays have elements
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }

    // add remaining elements
    while (i < left.length) {
        result.push(left[i])
        i++
    }

    while (j < right.length) {
        result.push(right[j])
        j++
    }

    return result
}


// In-Place Merge Sort =>

function mergeSortInPlace(arr: number[]): void {
    if (arr.length <= 1) return
    mergeSortInPlaceRec(arr, 0, arr.length - 1)
}

function mergeSortInPlaceRec(arr: number[], start: number, end: number): void {
    if (start >= end) return

    const mid = Math.floor((start + end) / 2)

    mergeSortInPlaceRec(arr, start, mid)
    mergeSortInPlaceRec(arr, mid + 1, end)

    mergeInPlace(arr, start, mid, end)
}

function mergeInPlace(arr: number[], start: number, mid: number, end: number): void {
    const temp: number[] = []

    let i = start
    let j = mid + 1

    // merge two sorted parts
    while (i <= mid && j <= end) {
        if (arr[i] <= arr[j]) {
            temp.push(arr[i])
            i++
        } else {
            temp.push(arr[j])
            j++
        }
    }

    // remaining left part
    while (i <= mid) {
        temp.push(arr[i])
        i++
    }

    // remaining right part
    while (j <= end) {
        temp.push(arr[j])
        j++
    }

    // copy back to original array
    for (let k = 0; k < temp.length; k++) {
        arr[start + k] = temp[k]
    }
}



console.log(mergeSort(arrToSort))
