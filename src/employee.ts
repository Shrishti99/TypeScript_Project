// src/employee.ts

export class employee {
    protected name: string;
    protected age: number;
    protected baseSalary: number;
    protected hra: number; // House Rent Allowance
    protected da: number;  // Dearness Allowance
    protected bonus: number; // Bonus

    constructor(name: string, age: number, baseSalary: number, hra: number, da: number, bonus: number) {
        this.name = name;
        this.age = age;
        this.baseSalary = baseSalary;
        this.hra = hra;
        this.da = da;
        this.bonus = bonus;
    }

    calculateSalary(): number {
        return this.baseSalary + this.hra + this.da + this.bonus;
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Base Salary: $${this.baseSalary}`);
        console.log(`HRA: $${this.hra}`);
        console.log(`DA: $${this.da}`);
        console.log(`Bonus: $${this.bonus}`);
    }
}
