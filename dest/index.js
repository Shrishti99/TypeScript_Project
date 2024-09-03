"use strict";
// src/test.ts
Object.defineProperty(exports, "__esModule", { value: true });
const doctor_1 = require("./doctor");
const nurse_1 = require("./nurse");
const doc = new doctor_1.doctor('Alice', 45, 100000, 20000, 15000, 5000, 'Cardiology');
doc.displayInfo();
console.log(`Total Salary: $${doc.calculateSalary()}\n`);
const nur = new nurse_1.nurse('Bob', 30, 50000, 10000, 8000, 3000, 'night');
nur.displayInfo();
console.log(`Total Salary: $${nur.calculateSalary()}`);
