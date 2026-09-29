function isTaskCompleted(task){
const people = Array.isArray(task.people)
? task.people
: [];
 
return (
people.length > 0 &&
people.every(p => p.done === true)
);
}
 
function setupCompletedToggle(){
const toggle = document.getElementById("completedToggle");
const wrapper = document.getElementById("completedWrapper");
 
if(!toggle || !wrapper) return;
 
toggle.onclick = () => {
 
const open =
wrapper.classList.toggle("open");
 
toggle.setAttribute(
"aria-expanded",
String(open)
);
};
}
