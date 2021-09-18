import { Person } from '../AbstractClass/person';
import { ReportCard } from '../ReportCard/reportCard';

export class Student extends Person {
    reportCard: ReportCard;

    setReportCard(reportCard: ReportCard) {
        this.reportCard = reportCard;
    }

    getReportCard() {
        // console.log('Marks:- ')
        this.reportCard.getMarks();
    }

    display() {
        console.log(`Name: "${this.name}"\nDOB: ${this.getDateOfBirth()}`);
        this.getReportCard();
    }
}
