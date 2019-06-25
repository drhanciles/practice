var Student = /** @class */ (function () {
    function Student(firstName, middileInitial, lastName) {
        this.firstName = firstName;
        this.middileInitial = middileInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middileInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    var firstName = person.firstName, lastName = person.lastName;
    return "Hello, " + firstName + " " + lastName;
}
var user = new Student('Lilit', 'X.', 'Modi');
document.body.innerHTML = greeter(user);
