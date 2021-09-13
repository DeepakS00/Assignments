import { Student } from "../Student/student";
import { Subject } from "../Subject/subject";
import { Teacher } from "../Teacher/teacher";
import { ReportCard } from "../ReportCard/reportCard";
import { Marks } from "../Marks/marks";
import { Section } from "../Section/section";


// Subjects-----------------------------

const english = new Subject("English");
const math = new Subject("Mathematics");
const hindi = new Subject("Hindi");
const science = new Subject("Science");


// Marks--------------------------------

const marksAllotment = (
    englishMarks: number, 
    hindiMarks: number, 
    mathMarks: number, 
    scienceMarks: number) => {
        let marksEnglish = new Marks(english, englishMarks);
        let marksHindi = new Marks(hindi, hindiMarks);
        let marksMaths = new Marks(math, mathMarks);
        let marksScience = new Marks(science, scienceMarks);

        return [marksEnglish, marksHindi, marksMaths, marksScience];
        
}


// Students-----------------------------------------------------------

const vinay = new Student("Vinay Sharma", "11 june 1996");
const report1 = new ReportCard(marksAllotment(67, 89, 90, 78), vinay);
vinay.setReportCard(report1);

const kishan = new Student("Kishan Patel", "4 jan 1997");
const report2 = new ReportCard(marksAllotment(89, 78, 88, 90), kishan);
kishan.setReportCard(report2);

const nikhil = new Student("Nikhil Solanki", "8 feb 1995");
const report3 = new ReportCard(marksAllotment(80, 93, 76, 86), nikhil);
nikhil.setReportCard(report3);

const karan = new Student("Karan Singh", "23 dec 1996");
const report4 = new ReportCard(marksAllotment(95, 74, 80, 95), karan);
karan.setReportCard(report4);


// Teachers------------------------------------------------

const pankaj = new Teacher("Pankaj Patel", '21 sept 1983');
pankaj.setSalary(45000);
pankaj.setSubject(hindi);

const manish = new Teacher("Manish Verma", '2 april 1985');
manish.setSalary(40000);
manish.setSubject(english);

const kartik = new Teacher("Kartik Dangi", '9 may 1988');
kartik.setSalary(50000);
kartik.setSubject(math);

const vishal = new Teacher("Vishal Purohit", '27 august 1983');
vishal.setSalary(35000);
vishal.setSubject(science);


// Sections----------------------------------------

const tulip = new Section("Tulip");
tulip.setTeachers(pankaj, manish, kartik, vishal);
tulip.setStudents(vinay, kishan);

const rose = new Section("Rose");
rose.setTeachers(pankaj, manish, kartik, vishal);
rose.setStudents(nikhil, karan);


// Working------------------------

console.log(tulip.getTeacherByName("pankaj"));
console.log(tulip.getStudentByName("vinay sharma").getAge());
console.log(tulip.getStudentByName("vinay sharma").getReportCard());
console.log(tulip.getStudentByName("kishan Patel").getName());
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();