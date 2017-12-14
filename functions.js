hello();
// hi(); fails cause it's a function expression

// function declaration
function hello() {
     console.log("hello world");
}

// function expression + arrow function
const hi = () => {console.log("hi nice world");};
hi();

/* 

you shouldn't use arrow functions on: (often it's because of the 'this' keyword)

1 - click handlers - because of the this keyword
2 - objetcs methods - also because of 'this'
3 - in an objet's arguments - 
4 - prototypes 
5 - 

*/

// function expression with anonymous function
const hey = function() {
    console.log("hey functional world!");
};
hey();

// arrow
const sum = (num1, num2) => {
    console.log(num1 + num2);
};

// 'normal'
const sum2 = function(num1, num2) {
    console.log(num1 + num2);
};

sum(3, 5);
sum2(3, 5);