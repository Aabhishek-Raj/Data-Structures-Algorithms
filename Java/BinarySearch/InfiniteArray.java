public class InfiniteArray {
    // Find a position of an element in a sorted array of Infinite numbers =>
    public static void main(String[] args) {

        int[] arr = { 3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170 };
        int target = 131;

        System.out.println(ans(arr, target));
        System.out.println(binarySearch(arr, target));
    }

    static int ans(int[] arr, int target) {
        //first find the range
        //lets first start with box size two
        int start = 0;
        int end = 1;

        // condition for target to lie on the range
        while(target > arr[end]) {
            int newStart = end + 1;

            // double the box value
            // end = previous end + size of box * 2
            end = end + (end - start + 1) * 2;
            start = newStart;
        }
        return binarySearch(arr, target, start, end);
    }

    static int binarySearch(int[] arr, int target, int start, int end) {

        while(start <= end) {
            
            int mid = start + (end - start) / 2;

            if (target < arr[mid]) {
                end = mid - 1;
            } else if (target > arr[mid]) {
                start = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }

    // {2, 2, 3, 2, 3, 6}
    static int binarySearch(int[] arr, int target) {

        int start = 0;
        int end = arr.length - 1;

        while (start <= end) {
            int center = start + (end - start) / 2;

            if(arr[center] < target) {
                start = center + 1;
            } else if (arr[center] > target) {
                end = center - 1;
            } else {
                return center;
            }
        }
        return start;
    }
}

