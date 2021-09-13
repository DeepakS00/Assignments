"use strict";
exports.__esModule = true;
var student_1 = require("../Student/student");
var subject_1 = require("../Subject/subject");
var teacher_1 = require("../Teacher/teacher");
var reportCard_1 = require("../ReportCard/reportCard");
var marks_1 = require("../Marks/marks");
var section_1 = require("../Section/section");
// Subjects-----------------------------
var english = new subject_1.Subject("English");
var math = new subject_1.Subject("Mathematics");
var hindi = new subject_1.Subject("Hindi");
var science = new subject_1.Subject("Science");
// Marks--------------------------------
var marksAllotment = function (englishMarks, hindiMarks, mathMarks, scienceMarks) {
    var marksEnglish = new marks_1.Marks(english, englishMarks);
    var marksHindi = new marks_1.Marks(hindi, hindiMarks);
    var marksMaths = new marks_1.Marks(math, mathMarks);
    var marksScience = new marks_1.Marks(science, scienceMarks);
    return [marksEnglish, marksHindi, marksMaths, marksScience];
};
// Students-----------------------------------------------------------
var vinay = new student_1.Student("Vinay Sharma", "11 june 1996");
var report1 = new reportCard_1.ReportCard(marksAllotment(67, 89, 90, 78), vinay);
vinay.setReportCard(report1);
var kishan = new student_1.Student("Kishan Patel", "4 jan 1997");
var report2 = new reportCard_1.ReportCard(marksAllotment(89, 78, 88, 90), kishan);
kishan.setReportCard(report2);
var nikhil = new student_1.Student("Nikhil Solanki", "8 feb 1995");
var report3 = new reportCard_1.ReportCard(marksAllotment(80, 93, 76, 86), nikhil);
nikhil.setReportCard(report3);
var karan = new student_1.Student("Karan Singh", "23 dec 1996");
var report4 = new reportCard_1.ReportCard(marksAllotment(95, 74, 80, 95), karan);
karan.setReportCard(report4);
// Teachers------------------------------------------------
var pankaj = new teacher_1.Teacher("Pankaj Patel", '21 sept 1983');
pankaj.setSalary(45000);
pankaj.setSubject(hindi);
var manish = new teacher_1.Teacher("Manish Verma", '2 april 1985');
manish.setSalary(40000);
manish.setSubject(english);
var kartik = new teacher_1.Teacher("Kartik Dangi", '9 may 1988');
kartik.setSalary(50000);
kartik.setSubject(math);
var vishal = new teacher_1.Teacher("Vishal Purohit", '27 august 1983');
vishal.setSalary(35000);
vishal.setSubject(science);
// Sections----------------------------------------
var tulip = new section_1.Section("Tulip");
tulip.setTeachers(pankaj, manish, kartik, vishal);
tulip.setStudents(vinay, kishan);
var rose = new section_1.Section("Rose");
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
