//SELECTORS
const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");
const filterOption=document.querySelector(".filter-todo");



//EVENT LISTENERS
todoButton.addEventListener("click",addToDo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("click",filterToDo);
//FUNCTIONS
function addToDo(Event)
{
    Event.preventDefault();
    const todoDiv=document.createElement('div');
    todoDiv.classList.add("todo");
    //LI
    const newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //CHECK
    const completedButton=document.createElement("button");
    completedButton.innerHTML='<i class="fas fa-check"><i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    const trashButton=document.createElement("button");
    trashButton.innerHTML='<i class="fas fa-trash"><i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    todoList.append(todoDiv);
    todoInput.value="";
 

}
function deleteCheck(e){
     const item=e.target;
     if(item.classList[0]==="trash-btn")
     {
         
        const todo=item.parentElement;
         todo.remove();
        
     }
     if(item.classList[0]==="complete-btn")
     {
         const todo=item.parentElement;
         todo.classList.toggle("Completed");
     }
}
function filterToDo(e){
  const todos=todoList.childNodes;
  todos.forEach(function(todo){
      switch(e.target.value){
          case "all":
            todo.style.display='flex';
            break;
          case "completed":
              if(todo.classList.contains("Completed")){
                  todo.style.display='flex';
              }
               else{
                  todo.style.display="none";
               }
            break;

          case "uncompleted":
            if(todo.classList.contains("Completed")){
                todo.style.display='none';
            }
             else{
                todo.style.display="flex";
             }
             break;
          }
      });
  }
