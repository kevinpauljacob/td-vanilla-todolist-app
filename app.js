// Selectors 
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions 
function addTodo(event) {
    event.preventDefault();

    // Creating Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    // Creating List Item
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // Check Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa fa-2x fa-check"></i>';
    completedButton.classList.add("complete-button");
    todoDiv.appendChild(completedButton);

    // Check Trash Button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa fa-2x fa-trash"></i>';
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);

    // Append Todo List
    todoList.appendChild(todoDiv);

    // Clear Todo Input
    todoInput.value = ""; 
}

function deleteCheck(event){
    const item = event.target;

    // Delete Todo
    if(item.classList[0] === "trash-button") {
        const todo = item.parentElement;
        todo.remove();
    }

    // Check Mark
    if(item.classList[0] === "complete-button") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}