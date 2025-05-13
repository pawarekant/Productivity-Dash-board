function openFeatures(){
var allElems= document.querySelectorAll('.elem');
var fullelem= document.querySelectorAll('.Fullelem');
var closebtn= document.querySelectorAll('.Fullelem .back');

allElems.forEach(function(elem) {
    elem.addEventListener('click', function() {
       fullelem[elem.id].style.display = "block"
    })
}) 
closebtn.forEach(function(back) {
    back.addEventListener('click', function() {
        fullelem[back.id].style.display = "none"
    })
})
}
openFeatures();

var currentTask = []
if (localStorage.getItem('task') !== null) {
    currentTask = JSON.parse(localStorage.getItem('task'));
}else {
    console.log('TaskList is empty');
}

var fixed = document.querySelector('.addtask form');
let form = document.querySelector('.addtask form');
let task = document.querySelector('.addtask form input');
let taskdetails = document.querySelector('.addtask form textarea');

fixed.addEventListener('submit', function(e) {
    e.preventDefault();
   currentTask.push({
        task: task.value,
        details: taskdetails.value,
        imp: 'important'
    });
    task.value = '';
    taskdetails.value = '';
    console.log(currentTask);
    showTask();
    localStorage.setItem('task', JSON.stringify(currentTask));
})
var alltasks = document.querySelector('.alltask');
function showTask() {
    var sum ='';
    currentTask.forEach(function(elem) {
        sum = sum + `<div class="task"> <h5>${elem.task} <span class ${elem.imp}></span></h5>
        <button> Mark as Complete</button> </div>`
    })
    alltasks.innerHTML = sum;
}
showTask();