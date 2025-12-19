// Student Grading System
// Use conditions to return A/B/C/D/F based on marks.

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 50) {
        return "D";
    }
    else {
        return "F";
    }
}
console.log(getGrade(85));


