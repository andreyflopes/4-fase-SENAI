public class App {
    /**
     * @param args
     * @throws Exception
     */
    @SuppressWarnings("unused")
    public static void main(String[] args) throws Exception {

        if (1 < 10) {
            System.out.println("10 é maior");
        } else {
            System.out.println("1 é maior");
        }

        int n = 0;
        switch (n) {
            case 10:
                System.out.println("o numero é 10");
                break;

            default:
                System.out.println("num tem garai kkkkkk");
                break;
        }

        while (n < 10) {
            System.out.printf("%d está aumetando no while\n---", n);
            n = n + 1;
            if (n == 10) {
                System.out.println("BBBBOOOOOOOOOOOOOOOOOOOOOMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM");
            }
        }

        for(int i = 1;i<10;i++){
            System.out.printf("%d está aumentando no for\n ---",i);
            if(i==10){
                System.out.println("Cabo");
            }
        }

        int numero = 0;
        do{
            System.out.printf("%d está aumentando no Do While\n---", numero);
            numero++;
        }while(numero<10);

    }
}
