

class Employee {
    static bonus = 100000;
    constructor(empId, fName, lName, age, location) {
        this.empId=empId;
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.location = location;

    }

    static setBonus(bonus) {

        Employee.bonus = bonus;

    }

    empDetails() {

        console.log(this.fName, ":", this.lName, ":", this.age, ":", this.location, ":", Employee.bonus);

    }



}


let emp1 = new Employee(101,'Sunil', 'Pawar', 31, 'Beed');
emp1.empDetails();
Employee.setBonus(150000);
let emp2 = new Employee(102,'Aarvi', 'Pawar', 2, 'Pune');
emp2.empDetails();


let car = {

    brand: 'Honda',
    Model: 'Elevate',
    Price: 1500000,
    EngineType: 'TurboCharge',
    FuelType: 'Diesel',
    carDetails: function () {
        //  return console.log("Car details :",this.brand,this.Model,this.Price,this.EngineType,this.FuelType)
        return [this.brand, this.Model, this.Price, this.EngineType, this.FuelType]

    }

}

console.log(car.carDetails());
car.Price = 1400000;
console.log(car['Price']);
console.log(car['FuelType']);
console.log(car.carDetails());

function isPalindromeNumber(num) {
    const str = num.toString();
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Example usage:
const number = 12321;
console.log(`${number} is palindrome?`, isPalindromeNumber(number));

