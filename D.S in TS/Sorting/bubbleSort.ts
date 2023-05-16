const bubbleSort = (arr: number[]): number[] => {
    let swap: boolean
    do {
        swap = false
        for (let i = 0; i < arr.length - 1; i++) {

            if (arr[i] > arr[i + 1]) {
                let temp: number = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp

                swap = true
            }
        }
    } while (swap)

    return arr
}

const arr = [2, 4, -1, 7, 8, 1]
console.log(bubbleSort(arr))