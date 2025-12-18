import java.util.HashSet;
import java.util.Set;

public class SlidingWindow {

    public static void main(String[] args) {

        int[] arr = { 1, 12, -5, -6, 50, 3 };
        int k = 4;

        // double result = MaximumAverageSubarrayBruteForce(arr, k);
        // double result = MaximumAverageSubarray(arr, k);
        int result = LongestUniqueSubstring();
        System.out.println(result);
    }

    public static double MaximumAverageSubarrayBruteForce(int[] nums, int k) {
        int maxSum = Integer.MIN_VALUE;
        for(int i = 0; i <= nums.length - k; i++) {
            int sum = 0;
            for(int j = i; j < i + k; j++) {
                sum += nums[j];
            }
            maxSum = Math.max(maxSum, sum);  
        }
        return (double) maxSum / k;
    }

    public static double MaximumAverageSubarray(int[] nums, int k) {
        int maxSum = 0;
        for(int i = 0; i < k; i++) {
            maxSum += nums[i];
        }
        int sum = maxSum;
        for(int i = k; i < nums.length; i++) {
            sum += nums[i];
            sum -= nums[i - k];
            maxSum = Math.max(sum, maxSum);
        }
        return (double) maxSum / k;
    }

    //  3. Longest substring Without Repeating Characters ==>

    public static int LongestUniqueSubstringBruteForce() {
        String s = "abcabcbb";
        int maxCount = 0;

        for (int i = 0; i < s.length(); i++) {

            Set<Character> letters = new HashSet<>();

            int count = 0;
            for(int j = i; j < s.length(); j++) {
                if(!letters.contains(s.charAt(j))) {
                    letters.add(s.charAt(j));
                    count++;
                } else {
                    break;
                }
            }
            maxCount = Math.max(maxCount, count);
        }
        return maxCount;
    }

    public static int LongestUniqueSubstring() {
       String s = "abcabcbb";

        int maxWindow = 0;
        int leftPointer = 0;

        Set<Character> letters = new HashSet<>();

        for(int r = 0; r < s.length(); r++) {

            while (letters.contains(s.charAt(r))) {
                letters.remove(s.charAt(leftPointer));
                leftPointer++;
            }
            letters.add(s.charAt(r));
            maxWindow = Math.max(maxWindow, r - leftPointer + 1);
        }
        return maxWindow;

    }
    
}
