"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, dob) {
        this.name = name;
        this.dob = dob;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getDateOfBirth = function () {
        return new Date(this.dob).toDateString();
    };
    Person.prototype.getAge = function () {
        var currDate = new Date();
        var dateOfBirth = new Date(this.dob);
        var birthMonth = dateOfBirth.getMonth();
        var birthDate = dateOfBirth.getDate();
        var age;
        if (currDate > dateOfBirth) {
            age = (currDate.getFullYear() - dateOfBirth.getFullYear()) - 1;
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
