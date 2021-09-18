import { IPerson } from './interface';

export abstract class Person implements IPerson {
    constructor(protected name: string, protected date: number, protected month: number, protected year: number) {
    }

    getName() {
        return this.name;
    }

    getDateOfBirth() {
        return new Date(this.year, this.month-1, this.date).toDateString();
    }

    getAge(): number {
        const currDate = new Date();
        const dob = new Date(this.year, this.month-1, this.date);
        const birthMonth = dob.getMonth();
        const birthDate = dob.getDate();

        let age: number;
        if (currDate > dob) {
            age = (currDate.getFullYear() - dob.getFullYear()) - 1;
            if (
                currDate.getMonth() > birthMonth || 
                (currDate.getMonth() == birthMonth &&  currDate.getDate() >= birthDate)
                ) {
                    age++;
                }
            return age;
        }
        else {
            age = 0;
            return age;
        }
    }
}
