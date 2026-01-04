public class SearchInMountain {
    // 1095. Find in Mountain Array

    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5, 3, 1 };
        int target = 3;

        System.out.println(findInMountainArray(target, arr));
    }

    static int findInMountainArray(int target, int[] arr) {

        int peak = findPeakIndex(arr);

        // search in increasing part
        int index = binarySearch(arr, 0, peak, target, true);
        if (index != -1) return index;

        // search in decreasing part
        return binarySearch(arr, peak + 1, arr.length - 1, target, false);
    }

    // Find peak element
    static int findPeakIndex(int[] arr) {
        int start = 0;
        int end = arr.length - 1;

        while (start < end) {
            int mid = start + (end - start) / 2;

            if (arr[mid] > arr[mid + 1]) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }
        return start;
    }

    //  Order-agnostic binary search
    static int binarySearch(int[] arr, int start, int end, int target, boolean isAscending) {

        while (start <= end) {
            int mid = start + (end - start) / 2;

            if (arr[mid] == target) {
                return mid;
            }

            if (isAscending) {
                if (target < arr[mid]) end = mid - 1;
                else start = mid + 1;
            } else {
                if (target > arr[mid]) end = mid - 1;
                else start = mid + 1;
            }
        }
        return -1;
    }
}
