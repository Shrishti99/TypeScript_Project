// src/test.ts

import { doctor } from './doctor';
import { nurse } from './nurse';

const doc = new doctor('Alice', 45, 100000, 20000, 15000, 5000, 'Cardiology');
doc.displayInfo();
console.log(`Total Salary: $${doc.calculateSalary()}\n`);

const nur = new nurse('Bob', 30, 50000, 10000, 8000, 3000, 'night');
nur.displayInfo();
console.log(`Total Salary: $${nur.calculateSalary()}`);
