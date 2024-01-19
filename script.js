const school = {
    name: "Lexicon",
    address: "Bygatan 1",
    zipcode: "111 11 Bystad",
    city: "Stockholm",
    teachers: [],
    students: [],
    addTeacher: function(teacher) {
        this.teachers.push(teacher);
    },
    addStudent: function(student) {
        this.students.push(student);
    },
    removeTeacher: function(teacher) {
        for (let i = 0; i < this.teachers.length; i++) {
            if (this.teachers[i].name === teacher.name) {
                this.teachers.splice(i, 1);
                break;
            }
        }
    }
};




/* Subjects */
const biology = {
    name: "Biology",
    students: [],
    teacher: {},
    addTeacher: function(teacher) {
        this.teacher = teacher;
    },
    addStudent: function(student) {
        this.students.push(student);
    },
    removeTeacher: function() {
        this.teacher = {};
    }
};

const mathematics = {
    name: "Mathematics",
    students: [],
    teacher: {},
    addTeacher: function(teacher) {
        this.teacher = teacher;
    },
    addStudent: function(student) {
        this.students.push(student);
    },
    removeTeacher: function() {
        this.teacher = {};
    }
};

const science = {
    name: "Science",
    students: [],
    teacher: {},
    addTeacher: function(teacher) {
        this.teacher = teacher;
    },
    addStudent: function(student) {
        this.students.push(student);
    },
    removeTeacher: function() {
        this.teacher = {};
    }
}

/* Students */
const adam = {
    name: "Adam",
    age: 21,
    gender: "male",
    subjects: [],
    enlistToSubject: function(subject) {
        this.subjects.push(subject);
        subject.addStudent(this);
    }
};
const beata = {
    name: "Beata",
    age: 22,
    gender: "female",
    subjects: [],
    enlistToSubject: function(subject) {
        this.subjects.push(subject);
        subject.addStudent(this);
    }
};
const carl = {
    name: "Carl",
    age: 23,
    gender: "male",
    subjects: [],
    enlistToSubject: function(subject) {
        this.subjects.push(subject);
        subject.addStudent(this);
    }
};
const diana = {
    name: "Diana",
    age: 21,
    gender: "female",
    subjects: [],
    enlistToSubject: function(subject) {
        this.subjects.push(subject);
        subject.addStudent(this);
    }
};
const erik = {
    name: "Erik",
    age: 22,
    gender: "male",
    subjects: [],
    enlistToSubject: function(subject) {
        this.subjects.push(subject);
        subject.addStudent(this);
    }
};
// console.log(adam);

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
// console.log(niklas);
// console.log(science);
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
// console.log(tmpTeacher);
// console.log(thomas);
// console.log(biology);


/* 8 */
// Test added method in niklas
niklas.addSubject(mathematics);
// console.log(niklas);

// Create and test method in thomas
thomas.addSubject = function(subject) {
    this.subjects.push(subject);
}
thomas.addSubject(science);
// console.log(thomas);


/* 9 */



/* 11 */
school.addTeacher(niklas);
school.addTeacher(thomas);
 console.log(school.teacher);

school.removeTeacher(niklas);
// school.removeTeacher(thomas);
 console.log(school.teachers);

// Create biology.quitSubject()
biology.quitSubject = function(student) {
    for (let i = 0; i < this.students.length; i++) {
        this.students.splice(i, 1);
        break;
    }
};
biology.quitSubject(adam);
// console.log(biology.students);








