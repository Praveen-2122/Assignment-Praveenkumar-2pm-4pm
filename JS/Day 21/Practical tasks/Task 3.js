// Build a 2D array of names and marks — print each student's data.

let studentsData = [ ["Praveen", 90], ["Prabhu", 91], ["Naren", 95]];

studentsData.forEach( student => {
    console.log("Name:", student[0]);    
    console.log("Marks:", student[1]);    
})
