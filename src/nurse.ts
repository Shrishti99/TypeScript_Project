// src/nurse.ts

import { employee } from './employee';

export class nurse extends employee {
    private shift: string;

    constructor(name: string, age: number, baseSalary: number, hra: number, da: number, bonus: number, shift: string) {
        super(name, age, baseSalary, hra, da, bonus);
        this.shift = shift;
    }

    calculateSalary(): number {
        const shiftBonus = this.shift === 'night' ? 1000 : 0; // Extra bonus for night shift
        return super.calculateSalary() + shiftBonus;
    }

    displayInfo(): void {
        super.displayInfo();
        console.log(`Shift: ${this.shift}`);
    }
}
