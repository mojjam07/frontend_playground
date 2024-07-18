var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentOfY');

form.addEventListener('submit', function(e) {
    
    if (!numField1.value || !numField2.value) {
        alert("Please enter values in the fields");
    }else {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        
        var result = x / y;
        var percent = result * 100;
        
        resultField.innerText = "Answer: " + percent + "%";
        e.preventDefault();
    }
})
//var name = "Adekunle";
//var age = 27;
//
//var message = "Hi, my name is " + name + " and  I am " + age + " years old.";

// Variables and Strings

//var firstName = "Jamiu";
//var lastName = "Mojeed";
//var dateOfBirth = "7/9/1997";
//var age = 27;
//var profPic = "http://coolpicks.com/johnjacob.jpg";
//
//var loginWelcome = "Welcome, " + firstName + ". Happy " + age + "rd birthday!"

//Numbers and operaors

//var sum = 13 + 27;
//var sub = 27 - 23;
//var div = 10 / 2;
//var mul = 10 * 4;
//var mod = 50 % 4;

// Comparison & Condtional operators

//var myAccBal = 400;
//var nikeShoe = 700;
//var coupon = 500
//
//if (myAccBal >= nikeShoe){
//    myAccBal -= nikeShoe;
//    console.log("You just bought a shoe!")
//    console.log("Account Balance: " + myAccBal);
//} else if (nikeShoe - coupon <= myAccBal) {
//    console.log("You just bought a nice shoe with a coupon!")
//    myAccBal = nikeShoe - coupon;
//    console.log("Account Balance: " + myAccBal);
//}
//
//else {
//    console.log("Please pick a lesser item!")
//}

// Logical operator

//var cat1 = 5;
//var cat2 = 10;
//var cat3 = 1;
//var cat3DisabledHandicap = true;
//
//
//if ( (cat1 > cat2 && cat1 > cat3) && !cat3DisabledHandicap) {
//    console.log("Cat 1 is the cutest!")
//} else if ( (cat2 > cat1 && cat2 > cat3) && !cat3DisabledHandicap) {
//    console.log("Cat 2 is the cutest!")
//}else if ( (cat3 > cat1 && cat3 > cat2) && cat3DisabledHandicap) {
//    console.log("Cat 3 is the cutest!")
//}


// Arrays

//console.log(sum);