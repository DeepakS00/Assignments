"use strict";
exports.__esModule = true;
exports.Marks = void 0;
var Marks = /** @class */ (function () {
    function Marks(subject, marks) {
        this.subject = subject;
        this.marks = marks;
    }
    Marks.prototype.setMarks = function (marks) {
        this.marks = marks;
    };
    Marks.prototype.getMarks = function () {
        return this.marks;
    };
    return Marks;
}());
exports.Marks = Marks;
