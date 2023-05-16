function heapSort(arr){
    for (let i = Math.floor(arr.length / 2) -1 ; i >= 0; i--) {
        heapify(arr, arr.length, i)
        
    }

    for(let i = arr.length - 1; i >= 0; i--) {
        [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0 ]]

        heapify(arr, i, 0)
    }

    return arr
}

function heapify(arr, n, i){
    const largest = i
    const left = 2 * i + 1
    const right = 2 * i + 2

    if(left < n && arr[left] > arr[largest]){
        largest = left
    }

    if(right < n && arr[right] > arr[largest]){
        largest = right
    }

    if(largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]

        heapify(arr, n, largest)
    }
}

const arr = [ 3, 2, 2, 5, 2, -9, 0]

console.log(heapSort(arr))


function heapSort(arr) {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapify(arr, arr.length, i)
    } 

    for(let i = arr.length - 1; i >= 0; i--){
        [arr[0], arr[i]] = [arr[i], arr[i]]

        heapify(arr, i, 0)
    }

    return arr
}


function heapify(arr, n, i) {
    const largest = i 
    const left = 2 * i + 1
    const right  = 2 * i + 2

    if( left < n && arr[left] > arr[largest]) {
        largest = left
    }

    if(right < n && arr[right] > arr[largest]){
        largest = right
    }

    if(largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
    }

    heapify(arr, n, largest)
}