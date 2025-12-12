import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner inp = new Scanner(System.in);
        int ans = 0;

        while(true) {
            System.out.println("Enter an Operator: ");
            char oper = inp.next().trim().charAt(0);
    
            if (oper == '+' || oper == '-' || oper == '*' || oper == '/' || oper == '%') {
                System.out.println("Enter Two Numbers: ");
                int num1 = inp.nextInt();
                int num2 = inp.nextInt();
    
                if (oper == '+') {
                    ans = num1 + num2;
                }
                if (oper == '-') {
                    ans = num1 - num2;
                }
                if (oper == '*') {
                    ans = num1 * num2;
                } 
                if (oper == '/') {
                    ans = num1 / num2;
                }
            } else if (oper == 'x' || oper =='X') {
                break;
            } else{
                System.out.println("Invalid Operation");
            }
            System.out.println(ans);

        }

    }
}
