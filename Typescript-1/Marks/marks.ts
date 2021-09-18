import { Subject } from '../Subject/subject';

export class Marks {
    constructor(protected subject: Subject, protected marks: number) {}

    setMarks(marks: number) {
        this.marks = marks;
    }

    getMarks(): number {
        return this.marks;
    }

    showMarks() {
        return `${this.subject.getName()}: ${this.marks}`
    }
}
    
