// Student Grading System
// Use conditions to return A/B/C/D/F based on marks.


let score = 56;
// let score = 56;

// if (score >= 90){
//     console.log("A");    
// } else if( score >= 80){
//     console.log("B");
// }else if( score >= 70){
//     console.log("C");
// } else if ( score >= 50){
//     console.log("D");    
// } 
// else{
//     console.log("F");
// }

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

if (score >= 90){
    console.log("A");    
} else if( score >= 80){
    console.log("B");
}else if( score >= 70){
    console.log("C");
} else if ( score >= 50){
    console.log("D");    
} 
else{
    console.log("F");
}