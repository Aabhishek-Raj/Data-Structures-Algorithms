// 744. Find Smallest Letter Greater Than Target

// Input => letters = ['c', 'f', 'j'], target = 'a'
// Output => 'c'

// Input => letters = ['c', 'f', 'j'], target = 'j'
// Output => 'c'

public class SmallestLetter {
    public static void main(String[] args) {
        char[] arr = {'c', 'f', 'j'};
        char target = 'k';
        
        char ans = nextGreatestLetter(arr, target);
        System.out.print(ans);
    }

    static char nextGreatestLetter(char[] letters, int target) {
        int start = 0;
        int end = letters.length - 1;

        while(start <= end) {
            int mid = start + (end - start) / 2;
            if(target >= letters[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return letters[start % letters.length];
    }
}
