

export function binarySearch(arr: number[], target: number, s: number, e: number) {
    if(s > e) return -1

    let mid = s + (e - s) / 2

    if(arr[mid] === target) {
        return mid
    }
    if(target < arr[mid]) {
        return binarySearch(arr, target, s, mid - 1)
    }

    return binarySearch(arr, target, mid + 1, e)
}

const arr = [1, 2, 3, 4, 55, 66, 78]
const target = 78
const res = binarySearch(arr, target, 0, arr.length - 1)
console.log(res)