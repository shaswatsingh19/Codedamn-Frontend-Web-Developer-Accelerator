const addInput = document.querySelector('#add-task')

const addBtn =  document.querySelector('#add-btn')
const delTaskBtn  =  document.querySelector('#del-btn')

const renameBtn = document.querySelector('#rename-task')
const delBtn = document.querySelector('#del-task')

const newTasks = document.querySelector('.new-tasks')

delTaskBtn.addEventListener('click', () => {
    addInput.value = ''
})


addBtn.addEventListener('click', (e)=> {
    let todo = addInput.value
    todo = todo.trim()
    if (todo==''){
        alert('No task is added ')
    }else{
        console.log(todo)
        addTodo(todo)
    }
})


function addTodo(todo){
    let todoTask  = ` 
                <div class="task">
					<input type="text" id="added-task" name='todo' value="${todo}">
					<input type="button" value="✏️" name='rename' id="rename-task">
					<input type="button" value="❌" name='delete' id="del-task">
				</div>
                ` 
    newTasks.innerHTML += todoTask
}