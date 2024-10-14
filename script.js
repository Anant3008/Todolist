let todoList=JSON.parse(localStorage.getItem('todoList')) || []
displayItems()

function addTodo(){
    let inputElement=document.querySelector(".task")
    let todoValue=inputElement.value
    let dateElement=document.querySelector(".date")
    let todoDate=dateElement.value
    if(todoValue===""){
        alert("Please enter a task")
    }
    else{
    todoList.push({task: todoValue,duedate: todoDate})
    localStorage.setItem('todoList',JSON.stringify(todoList))
    inputElement.value=""
    displayItems()
    }
}

function displayItems(){
    let containerElemnts=document.querySelector(".output-cont")
    let newHtml=''
    for (let i = 0; i < todoList.length; i++) {
        let{task,duedate}=todoList[i]
        newHtml+=`
        
        <span class="output-span">${task}</span>
        <span class="output-span">${duedate}</span>
        <label>
        <input type="checkbox" class="delete-button output-span" onclick="todoList.splice(${i},1); displayItems();"></button>
        </label>
        `
    }
    containerElemnts.innerHTML=newHtml
}
console.log(todoList);