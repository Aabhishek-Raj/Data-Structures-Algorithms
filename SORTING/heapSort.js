function heapSort(arr) {
    // Build heap (rearrange array)
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      heapify(arr, arr.length, i);
    }
  
    // One by one extract an element from heap
    for (let i = arr.length - 1; i >= 0; i--) {
      // Move current root to end
      [arr[0], arr[i]] = [arr[i], arr[0]];
  
      // call max heapify on the reduced heap
      heapify(arr, i, 0);
    }
  
    return arr;
  }
  
  // To heapify a subtree rooted with node i which is
  // an index in arr[]. n is size of heap  
  function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    let left = 2 * i + 1; // left = 2*i + 1
    let right = 2 * i + 2; // right = 2*i + 2
  
    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    // If largest is not root
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]]; // swap
  
      // Recursively heapify the affected sub-tree
      heapify(arr, n, largest);
    }
  }



  const arr = [12, 11, 13, 5, 6, 7];
const sortedArr = heapSort(arr);
console.log(sortedArr); // [5, 6, 7, 11, 12, 13]
