function binarySearch(arr, target){
    let leftIndex = 0
    let rightIndex = arr.length -1

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(target === arr[middleIndex]){
            return middleIndex
        }
        if(arr[middleIndex] > target){
            rightIndex = middleIndex-1
        }else{
            leftIndex = middleIndex+1
        }
    }
    return -1

}

const arr = [ 1, 2, 3, 4, 506]


// console.log(binarySearch(arr, 506));
//big0 = 0(logn)

console.log(arr.splice(2, 3, 6));
console.log(arr);