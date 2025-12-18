import java.util.Arrays;

public class TwoPointers {
    public static void main(String[] args) {

        // int[] res = MoveZeroes();
        int res = WithMostWater();

        // System.out.println(Arrays.toString(res));
        System.out.println(res);
    }

    public static int[] MoveZeroes() {
        int[] nums = { 0, 1, 0, 3, 12 };
        int pointerA = 0;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                int temp = nums[pointerA];
                nums[pointerA] = nums[i];
                nums[i] = temp;
                pointerA++;
            }
        }

        return nums;
    }

    public static int WithMostWater() {
        int[] height = { 1, 8, 6, 2, 5, 4, 8, 3, 7 };

        int right = height.length - 1, left = 0;
        int maxArea = 0;

        while (right > left) {
            int area = Math.min(height[right], height[left]) * (right - left);
            if (height[left] > height[right]) {
                right--;
            } else {
                left++;
            }
            maxArea = Math.max(maxArea, area);
        }
        return maxArea;
    }

}
