/*
# ECMA Script
-> ECMAScript is a standard on which javascript is based.
-> In the early 90's when javascript was creating then there was no standard diff. people
wanted to add different kinds of features so to make it same for all, a standard is made
which is knows as ECMAScript.
*/

/*
-> Javascript is very liberal because it try best not to throw an error.
-> As we know that interactive web applications didn't need to refresh like watsapp, facebook
etc. changes like messages recieved, send automatically appear without refresh, this functionality
is because of JavaScript.
-> In early phase javascript was only used on browser but Ryan Dahl put V8 engine of browser
in C++ program so that we can use it outside the browser.
-> V8 engine is the engine of browser which is developed by the google. V8 engine sometimes
also called JavaScript Engine.
-> We can also use javascript on html file by inserting it in <script> tag.
*/

// Below is a program to swap 2 no.s
let a = 5, b = 10;  //<--In previous, let is a keyword which is used to declare a Block Scoped variable.
console.log(swap(a, b))
function swap(a, b){
  [a, b]=[b, a]
  return [a, b]
}
