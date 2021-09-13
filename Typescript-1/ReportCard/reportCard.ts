import { Student } from '../Student/student';
import { Marks } from '../Marks/marks';

export class ReportCard {
    constructor(protected marks: Marks[], protected student: Student) {}

    totalNumber(): number { 
      let total = 0
      for (let x of this.marks) {
        total += x.getMarks();
      }
      return total; 
    }

    percentage(): number { 
      return(this.totalNumber() / this.marks.length);
    }
}