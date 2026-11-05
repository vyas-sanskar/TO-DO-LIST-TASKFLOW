
let input = document.querySelector("#inp");
let addBtn = document.querySelector("#addBtn");
let listContainer = document.querySelector(".list-container");
let tasksArr = [];

let renderUi = () => {
    listContainer.innerHTML = "";

    tasksArr.forEach((val, index) => {
        listContainer.innerHTML += `
            <div class="list-item ${val.isComplete ? "completed" : ""}">
                <p>${val.task}</p>
                <div class="btns">
                    <button onclick="completeTask(${index})" id="comp">
                        ${val.isComplete ? "Completed" : "Complete"}
                    </button>
                    <button onclick="deleteTask(${index})" class="delete">
                        Delete
                    </button>
                </div>
            </div>
        `;
    });
};

addBtn.addEventListener("click", () => {

    let inpValue = input.value;
    console.log(inpValue);

    if (inpValue.trim() === "") {
        alert("Provide a task");
        return;
    }

    tasksArr.push({
        task: inpValue,
        isComplete: false,
    });

    console.log(tasksArr);

    input.value = "";
    renderUi();
});

let deleteTask = (index) => {

    console.log(index);

    tasksArr.splice(index, 1);

    console.log(tasksArr);

    renderUi();
};

let completeTask = (index) => {

    tasksArr[index].isComplete = !tasksArr[index].isComplete;

    renderUi();
};
