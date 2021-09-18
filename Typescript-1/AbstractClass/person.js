"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, date, month, year) {
        this.name = name;
        this.date = date;
        this.month = month;
        this.year = year;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getDateOfBirth = function () {
        return new Date(this.year, this.month - 1, this.date).toDateString();
    };
    Person.prototype.getAge = function () {
        var currDate = new Date();
        var dob = new Date(this.year, this.month - 1, this.date);
        var birthMonth = dob.getMonth();
        var birthDate = dob.getDate();
        var age;
        if (currDate > dob) {
            age = (currDate.getFullYear() - dob.getFullYear()) - 1;
            if (currDate.getMonth() > birthMonth ||
                (currDate.getMonth() == birthMonth && currDate.getDate() >= birthDate)) {
                age++;
            }
            return age;
        }
        else {
            age = 0;
            return age;
        }
    };
    return Person;
}());
exports.Person = Person;
