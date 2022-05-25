const profile = {
    name: "alex",
    duuh: "duuh",
    age: 20, 
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
};

const _age = profile.age;

const {age}: { age: number } = profile;
//const {duuh}: string = profile;

const { coords: { lat, lng } }: { coords: { lat: number, lng: number}} = profile;