const passLength = function(){
    const answer = window.prompt("How many characters will your password be? Enter a number between 8 and 128")
    if(answer > 128 || answer < 8 || isNaN(answer) || answer.length === 0){
      window.alert("Please enter a numeric value ");
      passLength();
    }
    return answer
  }



// let length =   window.prompt("How many characters will your password be? Enter a number between 8 and 128");
// ​
// let lengthFun = function() {let length =  window.prompt("How many characters will your password be? Enter a number between 8 and 128")};
// ​
// if (isNaN(length)) {window.alert("Please, add a numeric value");
// lengthFun()};
// ​
// let charType = window.prompt("Enter a character type: special, numeric, uppercase, lowercase, mixed.")
// ​
// let charTypeFun = function() {let charType = window.prompt("Enter a character type: special, numeric, uppercase, lowercase, mixed.")};
// ​
// if (!isNaN(charType)) {window.alert("Please, add letter value");
// charTypeFun()};
// ​
// ​
// function generatePassword() {
//   //evaluate character type
//   let charSet = "";
//   if( charType === "lowercase" ) {
//     charSet = "abcdefghijklmnopqrstuvwxyz";
//   } else if( charType === "uppercase" ) {
//     charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   } else if( charType === "numeric" ) {
//     charSet = "0123456789";
//   } else if( charType === "special" ) {
//     charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//   } else if ( charType === "mixed") {
//     charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//   }
//   //return value
//   let password = "";
//   for (var i = 0; i < length; i++) {
//     //picks a character within charSet at index of random number
//     password += charSet.charAt(Math.floor(Math.random() * charSet.length));
//   }
//   return password;
// }
// alert(generatePassword());
