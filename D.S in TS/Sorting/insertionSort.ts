const insertionSort = (arr: number[]): number[] => {
    for(let i: number = 1; i < arr.length; i++) {
        let numberToInsert = arr[i]
        let j: number = i - 1

        while(j >= 0 && numberToInsert < arr[j]){
            arr[j + 1] = arr[j]
            j--
        }
        arr[j+1] = numberToInsert
    }
    return arr
}

const arr: number[] = [300, 4, 5, 2, -1, 0, 9]
console.log(insertionSort(arr))