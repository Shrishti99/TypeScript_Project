// src/__tests__/employee.test.ts

import { doctor } from '../doctor';
import { nurse } from '../nurse';

describe('Employee Salary Calculation', () => {
    test('Doctor salary calculation', () => {
        const doc = new doctor('Alice', 45, 100000, 20000, 15000, 5000, 'Cardiology');
        expect(doc.calculateSalary()).toBe(143000);
    });

    test('Nurse salary calculation for night shift', () => {
        const nur = new nurse('Bob', 30, 50000, 10000, 8000, 3000, 'night');
        expect(nur.calculateSalary()).toBe(72000);
    });

    test('Nurse salary calculation for day shift', () => {
        const nur = new nurse('Eve', 35, 55000, 11000, 8500, 3500, 'day');
        expect(nur.calculateSalary()).toBe(78000);
    });
});
