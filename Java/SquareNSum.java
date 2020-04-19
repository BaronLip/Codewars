public class Kata {
    public static int squareSum(int[] n) {
        System.out.println(n);
        int total = 0;

        for (int currentN : n) {
            int sq = currentN * currentN;
            total += sq;
        }

        return total;
    }
}