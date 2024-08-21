document.addEventListener("DOMContentLoaded", () => {
  // Grabbing DOM elements from index.html
  const todoInput = document.getElementById("todo-input");
  const addTodoButton = document.getElementById("add-todo");
  const todoList = document.getElementById("todo-list");
  const noDataDiv = document.getElementById("no-data");
  const deleteDialog = document.getElementById("delete-dialog");
  const confirmDeleteButton = document.getElementById("confirm-delete");
  const cancelDeleteButton = document.getElementById("cancel-delete");
  const messageElement = document.getElementById("display-message");

  // Variables for state management
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  // console.log(todos);

  let taskToDeleteId = null;
  let sortableEnabled = false;

  // Function to save tasks to local storage
  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  // console.log("after save todos", todos);

  // Function to generate unique IDs for tasks
  const generateUniqueId = () => {
    return `task-${Date.now()}`;
  };

  // Function to render the TODO list
  const renderTodos = () => {
    todoList.innerHTML = "";

    if (todos.length === 0) {
      // Display "no data" message if no tasks are present
      const noDataItem = document.createElement("div");
      noDataItem.className =
        "flex flex-col justify-center items-center mt-[60px]";
      noDataItem.innerHTML = noDataDiv.innerHTML;
      todoList.appendChild(noDataItem);
    } else {
      // Loop through and render each task
      todos.forEach((todo) => {
        const todoItem = document.createElement("li");
        todoItem.id = todo.id;
        todoItem.className =
          "flex items-center justify-between bg-[#463c7b] rounded-lg py-2 px-3 border-2 border-[#e6b7eca1] transition-all duration-200 hover:bg-[#e6b7eca1] mb-2 " +
          todo.state;

        // Create the label, checkbox, and task text
        const label = document.createElement("label");
        label.className = "flex items-center text-gray-200 cursor-pointer";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `${todo.id}-checkbox`;
        checkbox.className = `w-4 h-4 rounded-full border-2 appearance-none cursor-pointer ${
          todo.state
            ? `bg-[${todo.state}] border-[${todo.state}]`
            : "bg-transparent border-[#e6b7eca1]"
        }`;
        checkbox.checked = !!todo.state;

        const todoText = document.createElement("span");
        todoText.textContent = todo.text;
        todoText.className =
          todo.state === "#c8c7d6"
            ? "pl-2 line-through"
            : "pl-2 font-bold text-[17px]";

        label.appendChild(checkbox);
        label.appendChild(todoText);

        // Creating buttons (dropdown, edit, delete)
        const buttonContainer = document.createElement("div");
        buttonContainer.className = "space-x-[20px] relative";

        const dropdownButton = document.createElement("button");
        dropdownButton.className =
          "dropdown-btn bg-transparent border-none cursor-pointer text-gray-200 text-sm";
        dropdownButton.innerHTML = '<i class="fa fa-chevron-down"></i>';
        // event listener for tasks to open toggle dropdown only for that task on which it is triggered
        dropdownButton.addEventListener("click", (e) =>
          toggleDropdown(e, todo.id)
        );

        const dropdownMenu = document.createElement("ul");
        dropdownMenu.className =
          "dropdown-menu hidden absolute right-0 w-32 z-50 bg-[#463c7b] border-2 border-[#e6b7eca1] rounded-lg shadow-lg";
        dropdownMenu.style.top = "100%";

        const states = [
          { label: "Completed", value: "#6cff4a" },
          { label: "Progress", value: "#feffa3" },
          { label: "Incomplete", value: "#ff8b94" },
          { label: "Cancelled", value: "#c8c7d6" },
          { label: "Reset", value: "" },
        ];

        states.forEach((state) => {
          const stateItem = document.createElement("li");
          stateItem.textContent = state.label;
          stateItem.className =
            "px-4 py-2 text-gray-200 cursor-pointer hover:bg-[#e6b7eca1]";
          stateItem.addEventListener("click", () => {
            setState(todo.id, state.value);
            closeDropdowns();
          });
          dropdownMenu.appendChild(stateItem);
        });

        buttonContainer.appendChild(dropdownButton);
        buttonContainer.appendChild(dropdownMenu);

        const editButton = document.createElement("button");
        editButton.className =
          "edit-btn bg-transparent border-none cursor-pointer text-gray-200 text-sm";
        editButton.innerHTML = '<i class="fa fa-pencil"></i>';
        editButton.addEventListener("click", () => editTodo(todo.id));

        const deleteButton = document.createElement("button");
        deleteButton.className =
          "delete-btn bg-transparent border-none cursor-pointer text-gray-200 text-sm";
        deleteButton.innerHTML = '<i class="fa fa-times"></i>';
        deleteButton.addEventListener("click", () => {
          taskToDeleteId = todo.id;
          deleteDialog.classList.remove("hidden");
        });

        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);

        todoItem.appendChild(label);
        todoItem.appendChild(buttonContainer);

        // Attach double-click event for drag-and-drop sorting
        todoItem.addEventListener("dblclick", handleDoubleClick);

        todoList.appendChild(todoItem);
      });
    }
  };

  // Function to set the state of a task for checkbox (e.g., Completed, Progress)
  const setState = (taskId, state) => {
    const task = todos.find((todo) => todo.id === taskId);
    if (task) {
      task.state = state;
      saveTodos();
      renderTodos();
    }
  };

  let openDropdown = null;

  // Function to handle toggling the dropdown and closing others
  const toggleDropdown = (event) => {
    event.stopPropagation();

    const dropdownMenu = event.currentTarget.nextElementSibling;

    // If a dropdown is already open and it's not the current one, close it
    if (openDropdown && openDropdown !== dropdownMenu) {
      openDropdown.classList.add("hidden");
    }

    // Toggle the visibility of the clicked dropdown
    dropdownMenu.classList.toggle("hidden");

    // Update the openDropdown variable
    openDropdown = dropdownMenu.classList.contains("hidden")
      ? null
      : dropdownMenu;
  };

  // Function to close the dropdown when clicking outside
  const closeDropdowns = (event) => {
    if (
      openDropdown &&
      !openDropdown.contains(event.target) &&
      !event.target.classList.contains("dropdown-btn")
    ) {
      openDropdown.classList.add("hidden");
      openDropdown = null; // Reset the currently open dropdown
    }
  };

  // Event listener to document for outside clicks
  document.addEventListener("click", closeDropdowns);

  // Event listener to dropdown buttons
  document.querySelectorAll(".dropdown-btn").forEach((button) => {
    button.addEventListener("click", toggleDropdown);
  });

  // Function to add a new task
  const addTodo = () => {
    const todoText = todoInput.value.trim();
    if (!todoText) {
      displayMessage("Please write something to add!!", "#ef2f2f");
      return;
    }
    if (todoText.length > 15) {
      displayMessage("You can't enter more than 15 characters!!", "#ef2f2f");
      return;
    }
    const newTodo = {
      id: generateUniqueId(),
      text: todoText,
      state: "",
    };
    todos.unshift(newTodo);
    todoInput.value = "";
    saveTodos();
    renderTodos();
    displayMessage("Task added successfully", "#1FFF0F");
  };

  // Function to display messages (e.g., errors, success)
  const displayMessage = (message, color) => {
    messageElement.textContent = message;
    messageElement.style.color = color;
    messageElement.classList.remove("hidden");

    setTimeout(() => {
      messageElement.textContent = "";
      messageElement.classList.add("hidden");
    }, 3000);
  };

  // Function to edit a task
  const editTodo = (taskId) => {
    const taskIndex = todos.findIndex((todo) => todo.id === taskId);
    const todoItem = document.getElementById(taskId);
    const todoTextElement = todoItem.querySelector("span");

    const originalText = todos[taskIndex].text;

    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = originalText;
    inputField.className =
      "text-white bg-transparent outline-none border-b-2 pl-3";
    inputField.maxLength = 15; // Adjusted for your input limit
    inputField.id = `${taskId}-edit`;

    // Dynamically set the width based on the text length
    inputField.style.width = `${originalText.length + 1}ch`;

    // Replace the text element with the input field
    todoTextElement.replaceWith(inputField);
    inputField.focus();
    inputField.select();

    // Function to adjust the width as the user types
    const adjustWidth = () => {
      inputField.style.width = `${inputField.value.length + 1}ch`;
    };

    // Adjust width when the input changes
    inputField.addEventListener("input", adjustWidth);

    // Check before saving updated text
    const saveChanges = () => {
      const updatedText = inputField.value.trim();
      if (updatedText === "") {
        todos[taskIndex].text = originalText;
      } else if (originalText !== updatedText) {
        todos[taskIndex].text = updatedText;
        displayMessage(
          `Task updated from "${originalText}" to "${updatedText}"`,
          "#1FFF0F"
        );
      }
      saveTodos();
      renderTodos();
    };

    inputField.addEventListener("blur", saveChanges);

    inputField.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        saveChanges();
      }
    });
  };

  // Function to delete a task
  const deleteTodo = (taskId) => {
    todos = todos.filter((todo) => todo.id !== taskId);
    saveTodos();
    renderTodos();
    deleteDialog.classList.add("hidden");
    displayMessage("Task deleted successfully", "#1FFF0F");
  };

  // Function to handle the double-click for enabling drag-and-drop
  const handleDoubleClick = (event) => {
    const taskElement = event.currentTarget;
    taskElement.classList.add("sortable-active");

    if (!sortableEnabled) {
      enableDragAndDrop();
      sortableEnabled = true;
    }
  };

  // Function to initialize drag-and-drop
  const enableDragAndDrop = () => {
    const sortable = new Sortable(todoList, {
      animation: 150,
      onUpdate: (event) => {
        const newOrder = Array.from(todoList.children).map((child) => child.id);
        todos = newOrder.map((id) => todos.find((todo) => todo.id === id));
        saveTodos();
      },
    });
  };

  // Function for typed.js library
  new Typed("#text-display", {
    strings: [
      "Completed = Green",
      "Incomplete = Red",
      "In Progress = Yellow",
      "Cancelled = Gray",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });

  // Event Listeners for add todo
  addTodoButton.addEventListener("click", addTodo);
  todoInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  });

  confirmDeleteButton.addEventListener("click", () =>
    deleteTodo(taskToDeleteId)
  );
  cancelDeleteButton.addEventListener("click", () => {
    deleteDialog.classList.add("hidden");
  });

  // Initial render on page load
  renderTodos();
});
