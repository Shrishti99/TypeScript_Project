"use strict";
// src/nurse.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.nurse = void 0;
const employee_1 = require("./employee");
class nurse extends employee_1.employee {
    constructor(name, age, baseSalary, hra, da, bonus, shift) {
        super(name, age, baseSalary, hra, da, bonus);
        this.shift = shift;
    }
    calculateSalary() {
        const shiftBonus = this.shift === 'night' ? 1000 : 0; // Extra bonus for night shift
        return super.calculateSalary() + shiftBonus;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Shift: ${this.shift}`);
    }
}
exports.nurse = nurse;
