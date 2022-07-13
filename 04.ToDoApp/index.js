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
        addInput.value = ''
        updateTodo()
    }
})



function addTodo(todo){
    let todoTask  = ` 
                <div class="task">
					<input type="text" id="added-task" name='todo' disabled value="${todo}">
					<input type="button" value="✏️" name='rename' class="rename-task">
					<input type="button" value="❌" name='delete' class="del-task">
				</div>
                ` 
    newTasks.innerHTML += todoTask

}


function updateTodo(){
    

    let task  = document.querySelectorAll('.task')

    task.forEach((t) => {
        console.log(t)
        t.addEventListener('click', e =>{

            if(e.target.classList.contains('rename-task')){
                
                console.log('rename')
                
            }else {
                console.log('del')
            }
        })

    })
    // renameBtn.addEventListener('click',(e)=>{
    //     console.log(e)
    // })
    
    // delBtn.addEventListener('click',(e)=>{
    //     console.log(e)
    // })
}