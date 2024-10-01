class Person {
    #name;
    #age;
    #occupation;

    constructor(name, age, occupation) {
        this.#name = name;
        this.#age = age;
        this.#occupation = occupation;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    getOccupation() {
        return this.#occupation;
    }
}

class Student extends Person {
    constructor(name, age, occupation, major) {
        super(name, age, occupation);  
        this.major = major;
    }

   
    displayInfo() {
        return `Name: ${this.getName()}<br>
                Age: ${this.getAge()}<br>
                Occupation: ${this.getOccupation()}<br>
                Major: ${this.major}`;
    }
}

const student = new Student("Carl Benedict", 19, "Student", "Designing");

document.getElementById("student-info").innerHTML = student.displayInfo();
