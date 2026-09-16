// global Scope
// console.log(this); // Window

// function scope
// function abc () {
//     console.log(this); // Window
// }
// abc()

// Method : -->  A method is a function that is stored inside an object.
let obj = {
    name : "Soumitra",
    sayName : function () {
        console.log(this); // {name: 'Soumitra', sayName: ƒ}
        console.log(this.name); // Soumitra

    }, 
};
obj.sayName();


// Event handler 
// document.querySelector("h1")
// .addEventListener("click", function () {
//     console.log(this) // <h1>MAA</h1>
//     console.log((this.style.color = "red"))
// });


// class
// A class is a blueprint or template used to create objects with similar properties and methods

class Abc {
    constructor() {
        this.name = "Soumitra";
    }
}
let val = new Abc();