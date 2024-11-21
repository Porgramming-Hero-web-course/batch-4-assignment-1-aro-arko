"use strict";
{
    // problem 7
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const currentYear = new Date().getFullYear();
            const yearCnt = currentYear - this.year;
            return `${yearCnt} (assuming current year is ${currentYear})`;
        }
    }
    const car = new Car("Honda", "Civic", 2018);
    const carAge = car.getCarAge();
    console.log(carAge);
}