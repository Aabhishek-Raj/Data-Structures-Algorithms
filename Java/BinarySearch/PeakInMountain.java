public class PeakInMountain {
    public static void main(String[] args) {

        int[] array = { 2, 4, 5, 6, 4, 3, 1};
        int ans = peakIndexInMountainArray(array);
        System.out.println(array[ans]);

    }

    //852 Peak index in mountain array =>

    static int peakIndexInMountainArray(int[] arr) {

        int start = 0;
        int end = arr.length - 1;

        while(start < end) {
            
            int mid = start + (end - start) / 2;

            if (arr[mid] > arr[mid + 1]) {
                //now in descenting part
                //this may be the answer, but must look at left including mid
                // so end != mid - 1 like in binary search
                end = mid;
            }else {
                // now in asc part
                start = mid + 1;
            }
        }
        return start; // or end, as both are equal
    }

    // 0, 1, 0
    static int peakIndexInMountainArray2(int[] array) {
        int start = 0;
        int end = array.length - 1;

        while (start <= end) {
            int mid = start + (end - start) / 2;
            if(start < mid) {
                
            }
        }

        return -1;
    }
}
