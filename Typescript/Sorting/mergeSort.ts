const MergeSort = (arr: number[]): number[] => {
    if(arr.length < 2) {
        return arr
    }
    const leftArray: number[] = arr.slice(0, Math.floor(arr.length / 2))
    const rightArry: number[] = arr.slice(Math.floor(arr.length / 2))

    return merge(MergeSort(leftArray), MergeSort(rightArry))
}

const merge = (leftArr: number[], rightArr: number[]): number[] => {
    const sortedArr: number[] = []
    while(leftArr.length && rightArr.length) {
        if(leftArr[0] <= rightArr[0]){
            if(leftArr[0] !== undefined){
                sortedArr.push(leftArr.shift())
            }
        } else {
            if(rightArr[0] !== undefined){
                sortedArr.push(rightArr.shift())
            }
        }
    }
    return [...sortedArr, ...leftArr, rightArr]
}
const arr: number[] = [5, -3, -9, 9, 1, 8, 0, 7, -7]
console.log(MergeSort(arr))

