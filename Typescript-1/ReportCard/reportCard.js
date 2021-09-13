"use strict";
exports.__esModule = true;
exports.ReportCard = void 0;
var ReportCard = /** @class */ (function () {
    function ReportCard(marks, student) {
        this.marks = marks;
        this.student = student;
    }
    ReportCard.prototype.totalNumber = function () {
        var total = 0;
        for (var _i = 0, _a = this.marks; _i < _a.length; _i++) {
            var x = _a[_i];
            total += x.getMarks();
        }
        return total;
    };
    ReportCard.prototype.percentage = function () {
        return (this.totalNumber() / this.marks.length);
    };
    return ReportCard;
}());
exports.ReportCard = ReportCard;
