let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate: todoDate});
    
    inputElement.value='';
    dateElement.value='';

    localStorage.setItem('todoList', JSON.stringify(todoList));
    displayItems();
}

function displayItems(){
    let containerElement = document.querySelector('.todo-container');
    let emptyMessageElement = document.querySelector('#empty-message');
    
    let newHtml = '';
    
    for(let i=0;i<todoList.length;i++){
        let {item, dueDate} = todoList[i];
        newHtml += `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class='btn-delete'onclick="deleteItem(${i});">Delete</button>
        `;
    }
    containerElement.innerHTML = newHtml;
    emptyMessageElement.style.display = todoList.length ? 'none' : 'block';
}

function deleteItem(index){
    todoList.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(todoList));
    displayItems();
}

displayItems();
