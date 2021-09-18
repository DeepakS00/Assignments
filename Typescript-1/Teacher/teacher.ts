import { Person } from '../AbstractClass/person';
import { Subject } from '../Subject/subject';

export class Teacher extends Person {
    protected salary: number;
    protected subject: Subject;

    setSalary(salary: number) {
        this.salary = salary;
    }

    setSubject(subject: Subject) {
        this.subject = subject;
    }

    getSalary() {
        return this.salary;
    }

    getSubject() {
        return this.subject.getName();
    }

    display() {
        console.log(`Name: "${this.name}"\nDOB: ${this.getDateOfBirth()}\nSalary: ${this.salary}\nSubject: ${this.getSubject()}`);
    }
}
