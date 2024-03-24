
 // Concatenate Some Strings

document.getElementById("concateNate").onclick = function(){
    let firstName ="Mohsin"
    let lastName ="Ali"

    let statement = '"Mohsin" +" "+ "Ali"'

    document.getElementById("statement").innerHTML= statement;

    let fullName = firstName +" " + lastName

    document.getElementById("output").innerHTML= fullName
}

 // Ask Name From User

document.getElementById("askName").onclick = function(){
    let firstName =prompt("Please enter your firstname")
    let lastName =prompt("Please enter your lastname")

    document.getElementById("statement").innerHTML= "let fullname = firstname + lastname"


    let fullName= firstName +" "+ lastName

    document.getElementById("output").innerHTML= fullName
}

 // Comparison Operator

document.getElementById("comparisonOperator").onclick = function(){
    let num1 = prompt("Enter your first number")
    let num2 = prompt("Enter your second number")

    if(num1 == num2){
        document.getElementById("statement").innerHTML= "num1==num2"
    } else{
        document.getElementById("statement").innerHTML= "num1!==num2"
    }

    if(num1 == num2){
        document.getElementById("output").innerHTML= "Yes, your condition is true."   
    } else {
        document.getElementById("output").innerHTML= "No, your condition is false."
    }
}

 // If Else If Statement

document.getElementById("ifelseIf").onclick = function(){
    let marks = prompt("Enter your marks")

    if(marks <= 30){
        document.getElementById("output").innerHTML= "You are failed."   
    } else if(marks >30 && marks <=70){
        document.getElementById("output").innerHTML= "You are passed."
    } else{
        document.getElementById("output").innerHTML= "Congratulation! You Got A+."
    }
}

  // Testing Sets Of Conditions

document.getElementById("testingSets").onclick = function(){
    let Age = +prompt("Enter your age")
    let Weight = +prompt("Enter your weight")

    if(Age <18 && Weight<50){
        document.getElementById("output").innerHTML= "You are a teenage."   
    } else if(Age>18 && Age<=40  && Weight>50 && Weight<70){
        document.getElementById("output").innerHTML= "You are a Young man."
    } else{
        document.getElementById("output").innerHTML= "You Are an Old & Fatty."
    }
}

   // If Statement Nested

document.getElementById("ifStatementsNested").onclick = function(){
    let Age= +prompt("Enter Your Age");

    if (Age>=18){

    let Weight= +prompt("Enter Your Weight");

    if(Weight<= 70){
        document.getElementById("output").innerHTML= "You are a Young man."
    } else{
        document.getElementById("output").innerHTML= "You Are an Old & Fatty."
    }

    } else{
        document.getElementById("output").innerHTML= "You are a teenage."
    }
  }

       //   Login

  document.getElementById("login").onclick = function(){
    let Username = prompt("Enter your Username")
    let Password = prompt("Enter your Password")

    if(Username== "Mohsin" && Password == "2233"){
    document.getElementById("output").innerHTML= "You are Logged In!"
    }else {
        document.getElementById("output").innerHTML= "Try Username = Mohsin & Password = 2233 "
    }
  }

    // Clear Statement

document.getElementById("clearstatement").onclick = function () {

    document.getElementById("statement").innerHTML = " ";
    
}


     // Clear Output

document.getElementById("clearoutput").onclick = function () {

document.getElementById("output").innerHTML = " ";

}
