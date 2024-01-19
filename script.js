const school = {
    name: "Lexicon",
    address: "Bygatan 1",
    zipcode: "111 11 Bystad",
    city: "Stockholm",
    teachers: [],
    students: [],
    addTeacher: function(teacher) {
        this.teachers.push(teacher);
    }
};

/* Subjects */
const biology = {
    name: "Biology",
    students: [],
    teacher: {}
};
const mathematics = {
    name: "Mathematics",
    students: [],
    teacher: {}
};
const science = {
    name: "Science",
    students: [],
    teacher: {}
}

/* Students */
const adam = {
    name: "Adam",
    age: 21,
    gender: "male",
    subjects: []
};
const beata = {
    name: "Beata",
    age: 22,
    gender: "female",
    subjects: []
};
const carl = {
    name: "Carl",
    age: 23,
    gender: "male",
    subjects: []
};
const diana = {
    name: "Diana",
    age: 21,
    gender: "female",
    subjects: []
};
const erik = {
    name: "Erik",
    age: 22,
    gender: "male",
    subjects: []
};
 console.log();

/* Teachers */
const niklas = {
    name: "Niklas",
    subjects: [],
    addSubject: function(subject) {
        this.subjects.push(subject);
    }
};

const thomas = {
    name: "Thomas",
    subjects: []
};

/* 5 */
niklas.subjects.push(science);
console.log(niklas);
console.log(science);
// No info in science about teacher


/* 6 */
biology.students.push(adam);
console.log(biology);


/* 7 */
function addSubjectToTeacher(subject, teacher) {
    subject.teacher = teacher;
    teacher.subjects.push(subject);

    return teacher;
}

const tmpTeacher = addSubjectToTeacher(biology, thomas);
console.log(tmpTeacher);
console.log(thomas);
console.log(biology);


/* 8 */
// Test added method in niklas
niklas.addSubject(mathematics);
console.log(niklas);

// Create and test method in thomas
thomas.addSubject = function(subject) {
    this.subjects.push(subject);
}
thomas.addSubject(science);
console.log(thomas);


/* 9 */
// Test school.addTeacher()
school.addTeacher(niklas);
console.log(school.teachers);

// Create and test enlistToSubject()
biology.enlistToSubject = function(student) {
    this.students.push(student);
}

biology.enlistToSubject(diana);
console.log(biology.students);


// Create and test school.addStudent()
school.addStudent = function(student) {
    this.students.push(student);
}
school.addStudent(beata);
console.log(school.students);


// Create and test adam.addSubject()
adam.addSubject = function(subject) {
    this.subjects.push(subject);
}
adam.addSubject(biology);
console.log(adam);