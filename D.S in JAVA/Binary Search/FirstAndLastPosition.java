import javax.print.attribute.standard.Finishings;

public class FirstAndLastPosition {
    public static void main(String[] args) {
        int[] array = { 1, 3, 4, 4, 4, 6, 7 };

        FirstAndLastPosition obj = new FirstAndLastPosition();

       int[] result = obj.findIndexOfFirstAndLast(array, 4); 

       System.out.println(result[0]);
       System.out.println(result[1]);
    }

    public int[] findIndexOfFirstAndLast(int[] nums, int target) {

        int[] ans = {-1, -1};

        int start = search(nums, target, true);
        int end = search(nums, target, false);

        ans[0] = start;  
        ans[1] = end;

        return ans;
    }

    int search(int[] nums, int target, boolean findStartIndex) {

        int ans = -1;
        int start = 0;
        int end = nums.length - 1;

        while(start <= end) {
            int mid = start + (end - start) / 2;

            if(target < nums[mid]) {
                end = mid - 1;
            } else if (target > nums[mid]) {
                start = mid + 1;
            } else {
                //potential answer found
                ans = mid;

                if(findStartIndex) {
                    end = mid - 1; 
                } else {
                    start = mid + 1;
                }
            }
        }
        return ans;
    }
}