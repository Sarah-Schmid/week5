/*
//this is not a dynamic class, all the properities are defined
class Student {
    constructor(){
        this.firstName = 'Sam';
        this.lastName = 'Smith';
        this.phoneNumer = '1234567890';
        this.grade = 'A';
    }
}
*/

//dynamic class

class Student {
    constructor(firstName, lastName,phoneNumber,grade){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }

    introduce (){
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`);
    }
}

let student1 = new Student('Tom', 'Sawyer', '1234567890', 'A');
let student2 = new Student('Sarah','Schmid', '1234567890','A');

student1.introduce();
student2.introduce();