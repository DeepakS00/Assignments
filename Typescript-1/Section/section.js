"use strict";
exports.__esModule = true;
exports.Section = void 0;
var Section = /** @class */ (function () {
    function Section(name) {
        this.name = name;
        this.teachers = [];
        this.students = [];
    }
    Section.prototype.setTeachers = function () {
        var _a;
        var teachers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            teachers[_i] = arguments[_i];
        }
        (_a = this.teachers).push.apply(_a, teachers);
    };
    Section.prototype.getTeachers = function () {
        return this.teachers;
    };
    Section.prototype.setStudents = function () {
        var _a;
        var studentsArray = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            studentsArray[_i] = arguments[_i];
        }
        (_a = this.students).push.apply(_a, studentsArray);
    };
    Section.prototype.getStudents = function () {
        return this.students;
    };
    Section.prototype.getTeacherByName = function (name) {
        for (var _i = 0, _a = this.teachers; _i < _a.length; _i++) {
            var teacher = _a[_i];
            if (name.toLowerCase() == teacher.getName().toLowerCase()) {
                return teacher;
            }
        }
    };
    Section.prototype.getStudentByName = function (name) {
        for (var _i = 0, _a = this.students; _i < _a.length; _i++) {
            var student = _a[_i];
            if (name.toLowerCase() == student.getName().toLowerCase()) {
                return student;
            }
        }
    };
    return Section;
}());
exports.Section = Section;
