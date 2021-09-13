import { IPerson } from './interface';

export abstract class Person implements IPerson {
    constructor(protected name: string, protected dob: string) {
    }

    getName() {
        return this.name;
    }

    getDateOfBirth() {
        return new Date(this.dob).toDateString();
    }

    getAge(): number {
        const currDate = new Date();
        const dateOfBirth = new Date(this.dob);
        const birthMonth = dateOfBirth.getMonth();
        const birthDate = dateOfBirth.getDate();

        let age: number;
        if (currDate > dateOfBirth) {
            age = (currDate.getFullYear() - dateOfBirth.getFullYear()) - 1;
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
