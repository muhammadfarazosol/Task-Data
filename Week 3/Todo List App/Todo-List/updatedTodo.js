document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTodoButton = document.getElementById("add-todo");
  const todoList = document.getElementById("todo-list");
  const noDataDiv = document.getElementById("no-data");

  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const renderTodos = () => {
    if (todos.length === 0) {
      noDataDiv.classList.remove("hidden");
    } else {
      noDataDiv.classList.add("hidden");
      todoList.innerHTML = "";
      todos.forEach((todo, index) => {
        const todoItem = document.createElement("li");
        todoItem.className =
          "relative flex justify-between items-center border-2 border-[#e6b7eca1] py-4 px-5 font-bold rounded-md mb-2 todo-bar " +
          todo.state;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = `h-5 w-5 rounded-full appearance-none cursor-pointer ${
          todo.state === "state-1"
            ? "bg-[#076b1a] border-[#006400]"
            : todo.state === "state-2"
            ? "bg-[#dca928] border-[#dca928]"
            : todo.state === "state-3"
            ? "bg-[#f90300] border-[#f90300]"
            : todo.state === "state-4"
            ? "bg-[#7c8970] border-[#7c8970] "
            : todo.state === ""
            ? "bg-transparent border-2 border-white"
            : ""
        }`;

        checkbox.checked = todo.state !== "";

        const todoText = document.createElement("span");
        todoText.textContent = todo.text;
        todoText.className = "flex-grow ml-3 text-[#f0eeee]";

        // Create a container for the dropdown button and menu
        const dropdownContainer = document.createElement("div");
        dropdownContainer.className = "relative"; // Set this as relative so the dropdown is positioned relative to it

        const dropdownButton = document.createElement("button");
        dropdownButton.innerHTML = '<i class="fa fa-chevron-down"></i>';
        dropdownButton.className = "dropdown-btn mx-3 text-[#eee] rounded";
        dropdownButton.addEventListener("click", (e) =>
          toggleDropdown(e, index)
        );

        const dropdownMenu = document.createElement("ul");
        dropdownMenu.className =
          "dropdown-menu z-10 hidden absolute bg-white rounded-lg text-[#000]";
        dropdownMenu.style.top = "100%"; // Position it just below the button
        dropdownMenu.style.left = "50%"; // Align it to the center of the button
        dropdownMenu.style.transform = "translateX(-50%)"; // Offset the left alignment

        const states = [
          { label: "Completed", value: "state-1", color: "#076b1a" }, // Green
          { label: "Progress", value: "state-2", color: "#dca928" }, // Yellow
          { label: "Incomplete", value: "state-3", color: "#f90300" }, // Red
          { label: "Cancelled", value: "state-4", color: "#7c8970" }, // Grey
          { label: "Reset", value: "", color: "transparent", color: "black" }, // Transparent
        ];

        states.forEach((state) => {
          const stateItem = document.createElement("li");
          stateItem.textContent = state.label;
          stateItem.className =
            "cursor-pointer px-4 py-2 hover:bg-[#ddd] rounded";
          stateItem.style.color = state.color; // Set background color
          // stateItem.style.color =
          // state.color === "transparent" ? "#000" : "#fff"; // Set text color to ensure visibility
          stateItem.addEventListener("click", () => {
            setState(index, state.value);
            closeAllDropdowns();
          });
          dropdownMenu.appendChild(stateItem);
        });

        // Append the dropdown button and menu to the container
        dropdownContainer.appendChild(dropdownButton);
        dropdownContainer.appendChild(dropdownMenu);

        const editButton = document.createElement("button");
        editButton.innerHTML = '<i class="fa fa-pencil"></i>';
        editButton.className = "delete-btn mx-3 text-[#eee] rounded";
        editButton.addEventListener("click", () => editTodo(index));

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fa fa-times"></i>';
        deleteButton.className = "delete-btn mx-3 text-[#eee] rounded";
        deleteButton.addEventListener("click", () => deleteTodo(index));

        todoItem.appendChild(checkbox);
        todoItem.appendChild(todoText);
        todoItem.appendChild(dropdownContainer); // Add the dropdown container here
        todoItem.appendChild(editButton);
        todoItem.appendChild(deleteButton);

        todoList.appendChild(todoItem);
      });
    }
  };

  const addTodo = () => {
    const todoText = todoInput.value.trim();
    if (todoText) {
      todos.unshift({ text: todoText, state: "" });
      todoInput.value = "";
      saveTodos();
      renderTodos();
    }
  };

  const setState = (index, state) => {
    todos[index].state = state;
    saveTodos();
    renderTodos();
  };

  const toggleDropdown = (event, index) => {
    event.stopPropagation();
    closeAllDropdowns();
    const dropdownMenu = event.currentTarget.nextElementSibling;
    dropdownMenu.classList.toggle("hidden");
  };

  const closeAllDropdowns = () => {
    const dropdownMenus = document.querySelectorAll(".dropdown-menu");
    dropdownMenus.forEach((menu) => menu.classList.add("hidden"));
  };

  document.addEventListener("click", closeAllDropdowns);

  const editTodo = (index) => {
    const newTodo = prompt("Edit your todo", todos[index].text);
    if (newTodo !== null && newTodo.trim()) {
      todos[index].text = newTodo.trim();
      saveTodos();
      renderTodos();
    }
  };

  const deleteTodo = (index) => {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
  };

  todoInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  });

  addTodoButton.addEventListener("click", addTodo);

  renderTodos();
});

let typed = new Typed("#text-display", {
  strings: [
    "Completed = Green",
    "Incomplete = Red",
    "In Progress = Yellow",
    "Cancelled = Gray through line",
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});
