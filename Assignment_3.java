//Assignment-3

import java.util.Scanner;

public class Assignment_3{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        
        String str=sc.nextLine();
        char ch=sc.next().trim().charAt(0);
        String ans=partOfString(str,ch);
        System.out.println(ans);
    }

    public static String partOfString(String str,char ch)
    {
        for(int i=0;i<str.length();i++)
        {
            if(str.charAt(i)==ch)
            {
                return str.substring(i+1);
            }
        }
        return "";
    }

}