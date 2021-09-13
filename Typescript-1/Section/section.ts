import { Teacher } from '../Teacher/teacher';
import { Student } from '../Student/student';

export class Section {
    protected teachers: Teacher[] = [];
    protected students: Student[] = [];

    constructor(protected name: string) {}

    setTeachers(...teachers: Teacher[]) {
        this.teachers.push(...teachers);
    }

    getTeachers() {
        return this.teachers;
    }

    setStudents(...studentsArray: Student[]) {
        this.students.push(...studentsArray);
    }

    getStudents() {
        return this.students;
    }
    
    getTeacherByName(name: string) {
        for (let teacher of this.teachers) {
            if (name.toLocaleLowerCase() == teacher.getName().toLocaleLowerCase()) {
                return teacher;
            }       
        }
    }
    
    getStudentByName(name: string) {
        for (let student of this.students) {
            if (name.toLowerCase() == student.getName().toLowerCase()) {
                return student;
            }       
        }
    }
}
