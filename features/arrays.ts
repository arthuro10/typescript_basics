const carMakers: string[] = ['ford', 'toyota', 'chevy'];


const cars: string[] = [];


const dates = [new Date(), new Date()];

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro'],
]
const carsByMake_: string[][] = []


// help with inference when extracting values
const car = carMakers[0];


// prevent incompatible values
//carMakers.push(100);


// help with built in functions

carMakers.map((car: string): string => {
    return car.toLowerCase();
})



const importantDates = [new Date(), '2030-20-20'];

const importantDates_: (Date | string)[] = [new Date(), '2030-20-20'];
importantDates_.push(new Date());
importantDates_.push("2020-10-10");
//importantDates_.push(42);


