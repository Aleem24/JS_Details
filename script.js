// const number1 = 20;
// const number2 = "24";

// const str1 = Number(number1);//Type-Conversion Example

// const str2 = String(number2);

// console.log(
//   `Number = ${number1} and the type of it is ${typeof number1}, and string = ${str1} and the type of it is ${typeof str1}`
// );

// document.getElementById("TC_Number").innerHTML = number1+number2;







try {
  addalert("Welcome Guest");
} catch (err) {
    document.getElementById("err").innerHTML = err.message;
};





//Arrow function

function sum(a,b){
    return a+b;
};
add = (a,b) => a+b;
document.getElementById('arrow').innerHTML = add(50,10);