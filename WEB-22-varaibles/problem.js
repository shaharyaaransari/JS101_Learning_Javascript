let num =1221;
 let num1=num;
let rev =0;
while(num!=0){
    rem =num%10;
    rev=rev*10+rem;
    console.log(rev);
    num = num/10;
}
console.log(rev);
console.log(num1);
    if(rev==num1){
    
        console.log("Yes");
        
    }
    else{
        console.log("No");
    }



