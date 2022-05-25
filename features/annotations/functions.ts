// more on annotations around functions

const loggingNumber: (i:number) => void = (i: number) => {
    console.log(i);
};

const add = (a: number,b: number) => {

    return a - b;
}



const subtract = (a:number, b: number) => {
    a-b;
}

function divide(a:number, b:number) : number {
    return a / b;
}

const multiply = function(a:number, b:number) : number {
    return a*b;
}

const logger = (message: string): void => {
    console.log(message);
}

const throwError = (message: string): never => {
    throw new Error(message)
}



const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = (forecast: { date: Date, weather: string }) => {
    console.log(forecast.date);
    console.log(forecast.weather);
}

logWeather(todaysWeather);

// Es2015 Optimierung

const logWeather_Es = ( { date, weather}: { date: Date, weather: string }) => {
    console.log(date);
    console.log(weather);
}

