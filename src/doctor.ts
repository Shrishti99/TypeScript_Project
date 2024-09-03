// src/doctor.ts

import { employee } from './employee';

export class doctor extends employee {
    private specialization: string;

    constructor(name: string, age: number, baseSalary: number, hra: number, da: number, bonus: number, specialization: string) {
        super(name, age, baseSalary, hra, da, bonus);
        this.specialization = specialization;
    }

    calculateSalary(): number {
        const specializationBonus = 3000; // Extra bonus for specialization
        return super.calculateSalary() + specializationBonus;
    }

    displayInfo(): void {
        super.displayInfo();
        console.log(`Specialization: ${this.specialization}`);
    }
}
