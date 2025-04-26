// Encapculation

let emaployee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,

    getWage: function () {
        return this.baseSalary + (this.overtime * this.rate);
    }
}

console.log(emaployee.getWage(30000, 50, 10));
