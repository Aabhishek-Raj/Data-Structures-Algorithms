//bubble Sorting

function bubbleSort(arr){
    let swap
    do{
        swap = false
        for (i= 0; i < arr.length-1; i++){
            if(arr[i] > arr[i + 1]){
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swap = true
            }
        }
    }while(swap)
}


const arr1 = [3, 2, 4, 5, 6, 8]
bubbleSort(arr1)
 console.log(arr1)



 //Insertion Sort==>>

 function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        numToInsert=arr[i]
        let j = i - 1
        while(j>=0 && arr[j] > numToInsert){
            arr[j + 1 ] = arr[j]
            j= j-1
        }
        arr[j+1] = numToInsert
    }

 }

const  arr2 = [-9, -10, 8, 300, 4, 29, 0]
bubbleSort(arr2)
console.log(arr2);


//Selection Sort ===>

function selectionSort(arr){
    for(let i = 0; i < arr.length-1; i++){
        let min = i
        for(let j = i + 1; j < arr.length; j++){
            if(arr[min] > arr[j]){
                min = j 
            }
        }
        if(min != i){
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
}

const arr3 = [4, 5, 3, 6, 2, 1,]
selectionSort(arr3)
console.log(arr3)



