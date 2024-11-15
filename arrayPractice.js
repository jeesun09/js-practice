const marks = [
    { id: "1221", science: 90 },
    { id: "1231", science: 95 },
    { id: "1253", science: 85 },
]

const studentAbove90 = [];

for(let i = 0; i<marks.length; i++) {
    if(marks[i].science >= 90) {
        studentAbove90.push(marks[i]);
    }
}

console.log(studentAbove90);