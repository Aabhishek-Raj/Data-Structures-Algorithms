function quickSort(arr: number[]): number[] {
    // Base case: arrays of size 0 or 1 are already sorted
    if (arr.length <= 1) return arr;

    // Choose a pivot (last element is simple & common)
    const pivot = arr[arr.length - 1];

    // Create buckets
    const left: number[] = [];
    const equal: number[] = [];
    const right: number[] = [];

    // Partition the array
    for (const num of arr) {
        if (num < pivot) {
            left.push(num);
        } else if (num > pivot) {
            right.push(num);
        } else {
            equal.push(num);
        }
    }

    // Recursively sort left and right, then combine
    return [
        ...quickSort(left),
        ...equal,
        ...quickSort(right)
    ];
}

// TRUE IN-PLACE QUICK SORT
function quickSort2(arr: number[], low = 0, high = arr.length - 1): void {
    if (low >= high) return;

    const pivotIndex = partition(arr, low, high);

    quickSort2(arr, low, pivotIndex - 1);
    quickSort2(arr, pivotIndex + 1, high);
}

function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let i = low;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }

    [arr[i], arr[high]] = [arr[high], arr[i]];
    return i;
}


const numarray: number[] = [1, 3, 2, 1, 0, 0, 3, 2, 4]

console.log(quickSort2(numarray))