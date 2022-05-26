const todos = JSON.parse(localStorage.getItem('todos')) || [];

const render = () => {
    const todoList = document.getElementById('todo-list')
    todoList.innerHTML = '';
    // for (let i = 0; i < todos.length; i++) {
    //     todoList.innerHTML += '<li>'+ todos[i] +'</li>';
    // }
    const todoTemplate = todos.map(t => '<li>' + t + '</li>');
    todoList.innerHTML = todoTemplate.join('');
    const elementos = document.querySelectorAll('#todo-list li')
    elementos.forEach((elemento, i) => {
        // console.log(elemento, i);
        elemento.addEventListener('click', () => {
            // console.log(elemento, i);
            elemento.parentNode.removeChild(elemento);
            todos.splice(i, 1);
            actualizaTodos(todos);
            render();
        })
    })
}

const actualizaTodos = (todos) => {
    const todoStrings = JSON.stringify(todos);
    localStorage.setItem('todos', todoStrings);
}

window.onload = () => {
    render()
    // console.log("Intro a DOM desde main.js")

    // const parrafo = document.getElementById('text')
    // console.log(parrafo.innerHTML)
    // parrafo.innerText = "Texto actualizado"
    // parrafo.innerHTML += '<ul><li>Elemento 1</li><li>Elemento 2</li></ul>'
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById('todo')
        const todoText = todo.value;
        todo.value = '';
        todos.push(todoText)
        actualizaTodos(todos);
        console.log(todoText)
        render();
    }
}
