document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const markAllButton = document.getElementById("markAllButton");
    const removeAllButton = document.getElementById("removeAllButton");
    const taskList = document.getElementById("taskList");

    // Função para adicionar uma nova tarefa
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Por favor, insira uma tarefa.");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;

        // Botão para marcar a tarefa como concluída
        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        // Botão para remover a tarefa
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.classList.add("deleteButton");
        deleteButton.addEventListener("click", function(e) {
            e.stopPropagation(); // Previne que o clique no botão remova a tarefa
            taskList.removeChild(li);
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = ''; // Limpa o campo de entrada
        taskInput.focus(); // Coloca o foco de volta no campo de entrada
    }

    // Adiciona evento de clique ao botão "Adicionar"
    addTaskButton.addEventListener("click", addTask);

    // Adiciona evento para marcar todas as tarefas como concluídas
    markAllButton.addEventListener("click", function() {
        const tasks = taskList.querySelectorAll("li");
        tasks.forEach(task => {
            task.classList.add("completed");
        });
    });

    // Adiciona evento para remover todas as tarefas
    removeAllButton.addEventListener("click", function() {
        taskList.innerHTML = ''; // Limpa a lista
    });

    // Permite adicionar tarefas pressionando Enter
    taskInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            addTask();
        }
    });
});
