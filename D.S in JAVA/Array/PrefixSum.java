public class PrefixSum {

    public static void main(String[] args) {
        int[] nums = {1, 3, 5, 7, 9};

        NumArray numArray = new NumArray(nums);

        System.out.println(numArray.sumRange(0, 2)); // 1 + 3 + 5 = 9
        System.out.println(numArray.sumRange(1, 3)); // 3 + 5 + 7 = 15

        int res = SubArrayFromEqualK();
        System.out.println("SubArrayFromEqualK: " + res);
    }

    public static int SubArrayFromEqualK() {
        return 3;
    }
}

// 303 Range Sum Query - immutable ==>

class NumArray {

    private int[] prefixSum;

    public NumArray(int[] nums) {
        prefixSum = new int[nums.length];

        // build prefix sum
        prefixSum[0] = nums[0];
        for (int i = 1; i < nums.length; i++) {
            prefixSum[i] = prefixSum[i - 1] + nums[i];
        }
    }

    public int sumRange(int left, int right) {
        if (left == 0) {
            return prefixSum[right];
        }
        return prefixSum[right] - prefixSum[left - 1];
    }
}
