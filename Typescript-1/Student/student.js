"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Student = void 0;
var person_1 = require("../AbstractClass/person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.setReportCard = function (reportCard) {
        this.reportCard = reportCard;
    };
    Student.prototype.getReportCard = function () {
        // console.log('Marks:- ')
        this.reportCard.getMarks();
    };
    Student.prototype.display = function () {
        console.log("Name: \"" + this.name + "\"\nDOB: " + this.getDateOfBirth());
        this.getReportCard();
    };
    return Student;
}(person_1.Person));
exports.Student = Student;
