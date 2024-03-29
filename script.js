const grades = {
    grades: [],
    addGrade: function(subjectName, teacherName, studentName, grade) {
        this.grades.push(
            {
                subject: subjectName,
                teacher: teacherName,
                student: studentName,
                grade: grade
            }
        );
    }
}

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
    removeTeacher: function(teacher) {
        let index = this.teachers.findIndex(t => t.name === teacher.name);
        this.teachers.splice(index, 1);
    },
    fireTeacher: function(teacher) {
        teacher.removeAllSubjects(teacher);
    },
    addStudent: function(student) {
        this.students.push(student);
    },
    relegateStudent: function(student) {
        student.quitAllSubjects();
    }
    
};

/* Subjects */
const biology = {
    name: "Biology",
    students: [],
    teacher: {},
    grades: grades,
    addTeacher: function(teacher) {
        this.teacher = teacher;
    },
    removeTeacher: function() {
        this.teacher = {};
    },
    addStudent: function(student) {
        this.students.push(student);
    },
    removeStudent: function(student){
        let index = this.students.findIndex(s => s.name === student.name);
        this.students.splice(index, 1);
    },
    getStudentNames: function() {
        const nameList = [];
        for (const x of this.students) {
            nameList.push(x.name);
        }
        return nameList;
    },
    setGrade: function(teacherName, studentName, grade) {
        this.grades.addGrade(this.name, teacherName, studentName, grade);
    }
};

const mathematics = {
    name: "Mathematics",
    students: [],
    teacher: {},
    grades: grades,
    addTeacher: function(teacher) {
        this.teacher = teacher;
    },
    removeTeacher: function() {
        this.teacher = {};
    },
    addStudent: function(student) {
        this.students.push(student);
    },
    removeStudent: function(student){
        let index = this.students.findIndex(s => s.name === student.name);
        this.students.splice(index, 1);
    },
    getStudentNames: function() {
        const nameList = [];
        for (const x of this.students) {
            nameList.push(x.name);
        }
        return nameList;
    },
    setGrade: function(teacherName, studentName, grade) {
        this.grades.addGrade(this.name, teacherName, studentName, grade);
    }
};

const science = {
    name: "Science",
    students: [],
    teacher: {},
    grades: grades,
    addTeacher: function(teacher) {
        this.teacher = teacher;
    },
    removeTeacher: function() {
        this.teacher = {};
    },
    addStudent: function(student) {
        this.students.push(student);
    },
    removeStudent: function(student){
        let index = this.students.findIndex(s => s.name === student.name);
        this.students.splice(index, 1);
    },
    getStudentNames: function() {
        const nameList = [];
        for (const x of this.students) {
            nameList.push(x.name);
        }
        return nameList;
    },
    setGrade: function(teacherName, studentName, grade) {
        this.grades.addGrade(this.name, teacherName, studentName, grade);
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
    },
    quitSubject: function(subject) {
        // Remove
        let index = this.subjects.findIndex( o => o.name === subject.name);
        this.subjects.splice(index, 1);
        // Remove student from subject
        subject.removeStudent(this);
    },
    quitAllSubjects: function() {
        let subject;
        while(this.subjects.length > 0) {
            subject = this.subjects.pop();
            subject.removeStudent(this);
        }
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
    },
    quitSubject: function(subject) {
        // Remove
        let index = this.subjects.findIndex( o => o.name === subject.name);
        this.subjects.splice(index, 1);
        // Remove student from subject
        subject.removeStudent(this);
    },
    quitAllSubjects: function() {
        let subject;
        while(this.subjects.length > 0) {
            subject = this.subjects.pop();
            subject.removeStudent(this);
        }
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
    },
    quitSubject: function(subject) {
        // Remove
        let index = this.subjects.findIndex( o => o.name === subject.name);
        this.subjects.splice(index, 1);
        // Remove student from subject
        subject.removeStudent(this);
    },
    quitAllSubjects: function() {
        let subject;
        while(this.subjects.length > 0) {
            subject = this.subjects.pop();
            subject.removeStudent(this);
        }
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
    },
    quitSubject: function(subject) {
        // Remove
        let index = this.subjects.findIndex( o => o.name === subject.name);
        this.subjects.splice(index, 1);
        // Remove student from subject
        subject.removeStudent(this);
    },
    quitAllSubjects: function() {
        let subject;
        while(this.subjects.length > 0) {
            subject = this.subjects.pop();
            subject.removeStudent(this);
        }
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
    },
    quitSubject: function(subject) {
        // Remove
        let index = this.subjects.findIndex( o => o.name === subject.name);
        this.subjects.splice(index, 1);
        // Remove student from subject
        subject.removeStudent(this);
    },
    quitAllSubjects: function() {
        let subject;
        while(this.subjects.length > 0) {
            subject = this.subjects.pop();
            subject.removeStudent(this);
        }
    }
};


/* Teachers */
const niklas = {
    name: "Niklas",
    subjects: [],
    addSubject: function(subject) {
        this.subjects.push(subject);
        subject.addTeacher(this);
    },
    quitSubject: function(subject) {
        let index = this.subjects.findIndex(s => s.name === subject.name);
        this.subjects.splice(index, 1);
        subject.removeTeacher(this);
    },
    removeAllSubjects: function() {
        let subject;
        while(this.subjects.length > 0) {
            subject = this.subjects.pop();
            subject.removeTeacher(this);
        }
    },
    setStudentGrades: function(subject) {
        const nameList = subject.getStudentNames();
        for (const name of nameList) {
            subject.setGrade(this.name, name, 3);
        }
    }
};

const thomas = {
    name: "Thomas",
    subjects: [],
    addSubject: function(subject) {
        this.subjects.push(subject);
        subject.addTeacher(this);
    },
    quitSubject: function(subject) {
        let index = this.subjects.findIndex(s => s.name === subject.name);
        this.subjects.splice(index, 1);
        subject.removeTeacher(this);
    },
    removeAllSubjects: function () {
        let subject;
        while(this.subjects.length > 0) {
            subject = this.subjects.pop();
            subject.removeTeacher(this);
        }
    },
    setStudentGrades: function(subject) {
        const nameList = subject.getStudentNames();
        for (const name of nameList) {
            subject.setGrade(this.name, name, 5);
        }
    }
};


/* functions */
function addSubjectToTeacher(subject, teacher) {
    subject.teacher = teacher;
    teacher.subjects.push(subject);

    return teacher;
}

function displayAllStudents() {
    let arr = [];

    for (const key in school.students) {
        const student = school.students[key];
        arr.push(student.name);
    }

    return arr.join(', ');
}

function displayAllSubjectsOfStudent(student) {
    let arr = [];

    for (const key in student.subjects) {
        const subject = student.subjects[key];
        arr.push(subject.name);
    }

    return arr.join(', ');
}

function displayAllTeachers() {
    let arr = [];

    for (const key in school.teachers) {
        const teacher = school.teachers[key];
        arr.push(teacher.name);
    }

    return arr.join(', ');
}

function displayAllStudentsEnlistedToSubject(subject) {
    let arr = [];
    for (const key in subject.students) {
        const student = subject.students[key];
        arr.push(student.name);
    }
    return arr.join(', ');
}




school.addTeacher(niklas);
school.addTeacher(thomas);
// console.log(school);

// Add subjects to teachers
niklas.addSubject(biology);
niklas.addSubject(mathematics);
niklas.quitSubject(biology);

thomas.addSubject(science);
thomas.addSubject(biology);


school.addStudent(adam);
school.addStudent(beata);
school.addStudent(carl);
school.addStudent(diana);
school.addStudent(erik);
// console.log(school);



// Add students to subjets
adam.enlistToSubject(biology);
adam.enlistToSubject(mathematics);
// adam.quitSubject(biology);

beata.enlistToSubject(biology);
beata.enlistToSubject(mathematics);

carl.enlistToSubject(biology);
carl.enlistToSubject(science);

diana.enlistToSubject(biology);
diana.enlistToSubject(science);

erik.enlistToSubject(mathematics);
erik.enlistToSubject(science);



const ourStudents = displayAllStudents();
console.log(ourStudents);

const subjectsStudent = displayAllSubjectsOfStudent(adam);
console.log(subjectsStudent);

const ourTeachers = displayAllTeachers();
console.log(ourTeachers);

const studentsBiology = displayAllStudentsEnlistedToSubject(biology);
console.log(studentsBiology);

console.log('- biology.getStudentNames() -----------------');
const nameList = biology.getStudentNames();
console.log(nameList);


console.log('- Set grades -----------------');
niklas.setStudentGrades(mathematics);
thomas.setStudentGrades(biology);
thomas.setStudentGrades(science);

console.log('- All grades -----------------');
console.log(grades.grades);



