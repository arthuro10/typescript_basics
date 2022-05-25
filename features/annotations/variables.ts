const apples: number = 5;

//const banana: number = false;  --> Error

let speed: string = "gotta go fast";

let hasName: boolean = false;

// Type is the same as the value
let nothingMuch: null = null;

let nothing: undefined = undefined;

// built in objects

let now: Date = new Date();


////

// Array

let colors: string[] = ['red', 'green', 'blue'];

let myNumbers: number[] = [1,2,3,4,5];

let truths: boolean[] = [true, false,true, false, false];

//let myNumb: string[] = [1,2,3,4,5]; --> Error


// classes

class Car {

}

let car: Car = new Car();

// Object literal

let point: {x: number; y: number} = {
    x: 10,
    y: 20
}

let voint: {x: number;} = {
    x: 20,
    //a: 20
}

/////////////////////////////////////
/////// Functions
/////////////////////////////////////

const logNumber: (i:number) => void = (i: number) => {
    console.log(i);
};


/// Inference

const apple = 5;

//const banana: number = false;  --> Error

let speedo = "gotta go fast";

let hasNames = false;

// Type is the same as the value
let nothingMuch_ = null;

let nothings = undefined;

// built in objects

let nowadays = new Date();



////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

// when to use annotation
// 1) functions that return the 'any' type

const json = '{"x": 10, "y": 20}';


const coordinates: { x: number; y:number} = JSON.parse(json);
console.log(coordinates);

//coordinates.asdf;

// 2) when we declare a variable on one line
// and init it later

let words = ['red', 'green', 'blue'];


let foundWords = false;

words.forEach(word => {
    if(word === 'green'){
        foundWords = true;
    }
});


// 3) variables whose type cannot be inferred correctly 
let numbers = [-10 ,-1 ,12 ];
let numberAboveZero: boolean | number = false;

// Wenn ja --> Assign number, wenn nein false Zuweisung 
// Also möglich, dass der Typ entweder false ist oder eben number


numbers.forEach( number => {
    if (number > 0) {
     numberAboveZero = number;   
    }
});











