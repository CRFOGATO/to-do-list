// Lista de tarefas carregada da API
let todos = [];

// URL base da API
const API_BASE = "";

// Elementos do DOM
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoItems = document.getElementById("todo-items");

// Event listeners
todoForm.addEventListener("submit", addTodo);

// Carregar tarefas ao inicializar a página
document.addEventListener("DOMContentLoaded", loadTodos);

// Função para carregar todas as tarefas da API
async function loadTodos() {
  try {
    const response = await fetch(`${API_BASE}/todo`);

    if (response.ok) {
      todos = await response.json();
      renderTodos();
    } else {
      console.error("Erro ao carregar tarefas:", response.status);
      showError("Erro ao carregar tarefas");
    }
  } catch (error) {
    console.error("Erro de conexão:", error);
    showError("Erro de conexão com o servidor");
  }
}

// Função para adicionar nova tarefa
async function addTodo(e) {
  e.preventDefault();
  const title = todoInput.value.trim();

  if (title === "") return;

  try {
    const response = await fetch(`${API_BASE}/todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        done: false,
      }),
    });

    if (response.ok) {
      todoInput.value = "";
      await loadTodos(); // Recarregar lista
      showSuccess("Tarefa adicionada com sucesso!");
    } else {
      const error = await response.json();
      console.error("Erro ao adicionar tarefa:", error);
      showError(error.error || "Erro ao adicionar tarefa");
    }
  } catch (error) {
    console.error("Erro de conexão:", error);
    showError("Erro de conexão com o servidor");
  }
}

// Função para alternar status da tarefa
async function toggleTodo(id) {
  const todo = todos.find((t) => t.id === id);
  if (!todo) return;

  try {
    const response = await fetch(`${API_BASE}/todo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        done: !todo.done,
      }),
    });

    if (response.ok) {
      await loadTodos();
    } else if (response.status === 501) {
      showError("Funcionalidade de atualização ainda não implementada");
    } else {
      console.error("Erro ao atualizar tarefa:", response.status);
      showError("Erro ao atualizar tarefa");
    }
  } catch (error) {
    console.error("Erro de conexão:", error);
    showError("Erro de conexão com o servidor");
  }
}

// Função para excluir tarefa
async function deleteTodo(id) {
  if (!confirm("Tem certeza que deseja excluir esta tarefa?")) {
    return;
  }

  try {
    const response = await fetch(`${API_BASE}/todo/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      await loadTodos();
      showSuccess("Tarefa excluída com sucesso!");
    } else {
      console.error("Erro ao excluir tarefa:", response.status);
      showError("Erro ao excluir tarefa");
    }
  } catch (error) {
    console.error("Erro de conexão:", error);
    showError("Erro de conexão com o servidor");
  }
}

// Função para renderizar as tarefas
function renderTodos() {
  todoItems.innerHTML = "";

  if (todos.length === 0) {
    todoItems.innerHTML = '<li class="no-todos">Nenhuma tarefa encontrada</li>';
    return;
  }

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = `todo-item ${todo.done ? "completed" : ""}`;

    li.innerHTML = `
            <div class="todo-content">
                <input 
                    type="checkbox" 
                    ${todo.done ? "checked" : ""}
                    onchange="toggleTodo('${todo.id}')"
                >
                <span class="todo-text">${escapeHtml(todo.title)}</span>
                <button class="delete-btn" onclick="deleteTodo('${
                  todo.id
                }')" title="Excluir tarefa">
                    ✕
                </button>
            </div>
        `;

    todoItems.appendChild(li);
  });
}

// Função auxiliar para escapar HTML
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// Função para mostrar mensagens de sucesso
function showSuccess(message) {
  showMessage(message, "success");
}

// Função para mostrar mensagens de erro
function showError(message) {
  showMessage(message, "error");
}

// Função para mostrar mensagens
function showMessage(message, type) {
  // Remove mensagens anteriores
  const existingMessage = document.querySelector(".message");
  if (existingMessage) {
    existingMessage.remove();
  }

  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${type}`;
  messageDiv.textContent = message;

  const container = document.querySelector(".container");
  container.insertBefore(messageDiv, container.firstChild);

  setTimeout(() => {
    messageDiv.remove();
  }, 3000);
}
