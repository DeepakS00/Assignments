import { Person } from '../AbstractClass/person';
import { ReportCard } from '../ReportCard/reportCard';

export class Student extends Person {
    reportCard: ReportCard;

    setReportCard(reportCard: ReportCard) {
        this.reportCard = reportCard;
    }

    getReportCard() {
        return this.reportCard;
    }
}
