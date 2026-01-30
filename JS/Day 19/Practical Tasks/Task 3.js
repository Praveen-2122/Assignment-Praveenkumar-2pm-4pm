// Marks to Grade Converter

function grade(mark) {
    if (mark >=90) {
        return "A";
    }else if (mark >=80) {
        return "b"
    }
    else if (mark >=70) {
        return "c";
    }
    else if (mark >=60) {
        return "d";
    }
    else if (mark >=50) {
        return "e";
    }else {
        return "fail";
    }
}
let marks= grade(44);
console.log("Grade :",marks);