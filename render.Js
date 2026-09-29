function isTaskCompleted(task){
    const people = Array.isArray(task.people)
        ? task.people
        : [];

    return (
        people.length > 0 &&
        people.every(person => person.done === true)
    );
}

function createCompletedToggle(count){

    return `
        <div class="task-section">

            <button
                id="completedToggle"
                class="task-toggle"
                aria-expanded="false">

                <span>
                    ✅ Udførte opgaver (${count})
                </span>

                <span class="icon">⌄</span>

            </button>

            <div
                id="completedWrapper"
                class="completed-wrapper">
            </div>

        </div>
    `;
}

function setupCompletedToggle(){

    const toggle =
        document.getElementById("completedToggle");

    const wrapper =
        document.getElementById("completedWrapper");

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
