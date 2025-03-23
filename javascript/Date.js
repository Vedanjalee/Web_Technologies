// OTP Matching

let otp = Math.floor(Math.random()*8999) +1000;

alert(`You Otp is : ${otp}`);

let userInput = parseInt(prompt("eter otp"));

let correctOtp= false 

while(!correctOtp){
    if(otp === userInput){
        console.log(`Congratulations login successful`)
        correctOtp = true;
        break;
    }
    else{
        console.log(`please enter the correct otp`)
        userInput = parseInt(prompt("enter the OTP"))
    }
}