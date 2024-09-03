"use strict";
// src/employee.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.employee = void 0;
class employee {
    constructor(name, age, baseSalary, hra, da, bonus) {
        this.name = name;
        this.age = age;
        this.baseSalary = baseSalary;
        this.hra = hra;
        this.da = da;
        this.bonus = bonus;
    }
    calculateSalary() {
        return this.baseSalary + this.hra + this.da + this.bonus;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Base Salary: $${this.baseSalary}`);
        console.log(`HRA: $${this.hra}`);
        console.log(`DA: $${this.da}`);
        console.log(`Bonus: $${this.bonus}`);
    }
}
exports.employee = employee;
