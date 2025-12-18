import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListEg {
    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);

        ArrayList<Integer> list = new ArrayList<Integer>(10);

        for (int i = 0; i < 5; i++) {
            list.add(in.nextInt());
        }

        // To get an index
        for (int i = 0; i < 5; i++) {
            System.out.print(list.get(i)); //list[i] doesnot work here..
        }

    }
}
