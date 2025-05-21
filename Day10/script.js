// let marks = parseInt(promptd("enter your marks in % : "));

// if(marks >= 90){
//     console.log("you get grade A");

// }else if(marks >= 80){
//     console.log("you get grade B");

// }else if(marks >= 70){
//     console.log("you get grade C");

// }else{
//     console.log("why are you here ?");
// }




// if(ROLE === "admin"){
    
//     console.log("you are admin")
// } else if(ROLE=="user"){
//     console.log("you are user")
// } else{
//     console.log("please login to get your role")
// }



// let day = "monday"

// switch(day){
//     case "monday":

//         console.log("today is monday");
        

//     case "tuesday":

//         console.log("today is tuesday");
        

//     case "wednesday":

//         console.log("today is wednesday");
        

//     case "thursday":
        
//         console.log("today is thursday");
//         break;

//     case "friday":

//         console.log("today is friday");
//         break;

//     default :
//      console.log("i dont have these day")
// }




// let num1 = 10
// let num2 = 30

// let operation = "a"

// switch(operation){
//     case "+" :
//         console.log(num1 + num2);
//         break;

//     case "-" :
//         console.log(num1 - num2);
//         break;
    
//     case "*" :
//         console.log(num1 * num2);
//         break;

//     case "/" :
//         console.log(num1 / num2);
//         break;
     
//     case "%" :
//         console.log(num1 % num2);
//         break;

//     default:
//         console.error(operation + "is not supported")
// }



function checkPelindrome(str){

    if(typeof str != "string"){
        return console.log("please enter string")
    }

    let splitString = str.split("").reverse().join("")

    if(str === splitString){
        console.log("string is pelindrome")
    } else {
        console.log("string is not pelindrome")
    }
}

checkPelindrome("n");  