import { Student } from '../Student/student';
import { Marks } from '../Marks/marks';

export class ReportCard {
    constructor(protected marks: Marks[], protected student: Student) {}

    average(): number { 
      let total = 0
      for (let x of this.marks) {
        total += x.getMarks();
      }
      let averageValue = total / this.marks.length;
      return averageValue; 
    }

    percentage(): number { 
      return (this.average());
    }
}