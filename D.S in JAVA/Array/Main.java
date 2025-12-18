import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        String[] fruits = { "lemon", "apple", "banana", "cherry" };

        fruits[0] = "blackberry";

        Arrays.sort(fruits);
        Arrays.fill(fruits, "tomato");
    
        for(String fruit : fruits) {
            System.out.print(fruit + " ");
        }
        
    }
}