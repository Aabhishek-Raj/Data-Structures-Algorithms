// Input => letters = ['c', 'f', 'j'], target = 'a'
// Output => 'c'

// Input => letters = ['c', 'f', 'j'], target = 'c'
// Output => 'f'

// Input => letters = ['c', 'f', 'j'], target = 'd'
// Output => 'f'

// Input => letters = ['c', 'f', 'j'], target = 'j'
// Output => 'c'



public class SmallestLetter {
    public static void main(String[] args) {
        char[] arr = {'c', 'f', 'j'};
        char target = 'j';
        
        int ans = nextGreatestLetter(arr, target);
        System.out.print(ans);
    }

    static char nextGreatestLetter(char[] letters, char target) {

        int start = 0;
        int end = letters.length - 1;

        while(start <= end) {

            int mid =    + (end - start) / 2;
            
            if (target < letters[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return letters[start % letters.length];
    }
}
