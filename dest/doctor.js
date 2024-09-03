"use strict";
// src/doctor.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctor = void 0;
const employee_1 = require("./employee");
class doctor extends employee_1.employee {
    constructor(name, age, baseSalary, hra, da, bonus, specialization) {
        super(name, age, baseSalary, hra, da, bonus);
        this.specialization = specialization;
    }
    calculateSalary() {
        const specializationBonus = 3000; // Extra bonus for specialization
        return super.calculateSalary() + specializationBonus;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Specialization: ${this.specialization}`);
    }
}
exports.doctor = doctor;
