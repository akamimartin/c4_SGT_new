var student_array = [];

var student_object = {
    name: null,
    course: null,
    grade: null
};



function add_student() {
    var students = 'Name: ' + $('#student_name').val() + ' | Course: ' + $('#student_course').val() + ' | Grade: ' + $('#student_grade').val();
    var addstudent = Object.create(student_object);
    addstudent.name = $('#student_name').val();
    addstudent.course = $('#student_course').val();
    addstudent.grade = $('#student_grade').val();
    student_array.push(addstudent);
    $('#student_object').val(students);
    console.log(student_array)
}
$(document).ready(function() {
    $('.s_add').on('click', add_student);

});

function average_grade() {
    var sum = 0;
    var average = 0;

    for (i = 0; i < student_array.length; i++) {
        sum += student_array[i];
        average = sum / student_object.grade;
    }
}

function highlow_grade() {

}
