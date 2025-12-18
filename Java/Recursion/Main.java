public class Main {
    public static void main(String[] args) {
        int res = sum(5);
        System.out.println(res);
    }

    //expectation: 15 10 6 3 1
    //result:      1 3 6 10 15
    static int sum(int n) {
        if(n == 0) {
            return 0;
        }
        int res = n + sum(n-1);
        System.out.print(res + " ");
        return res;
    }
}
