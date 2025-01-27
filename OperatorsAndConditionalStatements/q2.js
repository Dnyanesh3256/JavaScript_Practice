let score = prompt("Enter score of a student (0-100)");
if((score >= 0) && (score <= 49)){
    alert("Student's grade is : F");
}else if((score >= 50) && (score <= 59)){
    alert("Student's grade is : D");
}else if((score >= 60) && (score <= 69)){
    alert("Student's grade is : C");
}else if((score >= 70) && (score <= 89)){
    alert("Student's grade is : B");
}else{
    alert("Student's grade is : A");
}