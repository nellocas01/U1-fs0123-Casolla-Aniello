let input = document.getElementById('input');
let button = document.getElementById('input-button');
let taskList = document.getElementById('task-list');

button.addEventListener('click', createList);

function createList(){

    if(input.value === ""){
        alert("scrivi qualcosa")
    }

    let li = document.createElement('li');
    let del = document.createElement('button');

    li.textContent = input.value;
    input.value = " ";
    del.textContent = 'X';
    li.append(del);
    taskList.append(li);
    
}



    let buttonDelete = document.querySelectorAll('#task-list button');

    for(button of buttonDelete){
    buttonDelete.addEventListener('click', () => {

        
        li.remove();
        
    });

}