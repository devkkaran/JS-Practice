const balance = 500;

if(balance > 500){
    console.log("The balance is above 500");
}
else if(balance < 500){
    console.log("The balance is below 500");
}
else{
    console.log("Balnce is 500");
}

(balance == 500)? console.log(true) : console.log(false)


switch (balance) {
    case 400:
        console.log("The Value is 400");
        break;
    case 600:
        console.log("The Value is 600");
        break;

    default:
        console.log("The value is 500");
        
        break;
}