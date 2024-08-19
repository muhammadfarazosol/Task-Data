document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTodoButton = document.getElementById("add-todo");
  const todoList = document.getElementById("todo-list");
  const noDataDiv = document.getElementById("no-data");
  const deleteDialog = document.getElementById("delete-dialog");
  const confirmDeleteButton = document.getElementById("confirm-delete");
  const cancelDeleteButton = document.getElementById("cancel-delete");
  const messageElement = document.getElementById("display-message");

  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  let taskToDeleteId = null;
  let sortableEnabled = false;

  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const generateUniqueId = () => {
    return `task-${Date.now()}`;
  };

  const renderTodos = () => {
    todoList.innerHTML = "";

    if (todos.length === 0) {
      const noDataItem = document.createElement("div");
      noDataItem.className =
        "flex flex-col justify-center items-center mt-[60px]";
      const noDataContent = noDataDiv.innerHTML;
      noDataItem.innerHTML = noDataContent;

      todoList.appendChild(noDataItem);
    } else {
      todos.forEach((todo) => {
        const todoItem = document.createElement("li");
        todoItem.id = todo.id;
        todoItem.className =
          "flex items-center justify-between bg-[#463c7b] rounded-lg py-2 px-3 border-2 border-[#e6b7eca1] transition-all duration-200 hover:bg-[#e6b7eca1] mb-2 " +
          todo.state;

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
        todoText.className = "pl-2 font-bold text-[17px]";

        if (todo.state === "#c8c7d6") {
          todoText.classList = "pl-2 line-through";
        }

        label.appendChild(checkbox);
        label.appendChild(todoText);

        const buttonContainer = document.createElement("div");
        buttonContainer.className = "space-x-[20px] relative";

        const dropdownButton = document.createElement("button");
        dropdownButton.className =
          "dropdown-btn bg-transparent border-none cursor-pointer text-gray-200 text-sm";
        dropdownButton.innerHTML = '<i class="fa fa-chevron-down"></i>';
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
            closeAllDropdowns();
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

        // Attach the double-click event to enable sortable
        todoItem.addEventListener("dblclick", handleDoubleClick);

        todoList.appendChild(todoItem);
      });
    }
  };

  confirmDeleteButton.addEventListener("click", () => {
    if (taskToDeleteId !== null) {
      todos = todos.filter((todo) => todo.id !== taskToDeleteId);
      saveTodos();
      renderTodos();
      displayMessage("Task deleted successfully!", "#1FFF0F");
    }
    deleteDialog.classList.add("hidden");
  });

  cancelDeleteButton.addEventListener("click", () => {
    deleteDialog.classList.add("hidden");
    taskToDeleteId = null;
  });

  const toggleDropdown = (event) => {
    event.stopPropagation();
    closeAllDropdowns();
    const dropdownMenu = event.currentTarget.nextElementSibling;
    dropdownMenu.classList.toggle("hidden");
  };

  const closeAllDropdowns = () => {
    document
      .querySelectorAll(".dropdown-menu")
      .forEach((menu) => menu.classList.add("hidden"));
  };

  // Close dropdowns when clicking outside of them
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown-btn")) {
      closeAllDropdowns();
    }
  });

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
  };

  const displayMessage = (message, color) => {
    messageElement.textContent = message;
    messageElement.style.color = color;
    messageElement.classList.remove("hidden");

    setTimeout(() => {
      messageElement.textContent = "";
      messageElement.classList.add("hidden");
    }, 3000);
  };

  const setState = (taskId, state) => {
    const task = todos.find((todo) => todo.id === taskId);
    if (task) {
      task.state = state;
      saveTodos();
      renderTodos();
    }
  };

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
      } else {
        todos[taskIndex].text = originalText;
      }
      saveTodos();
      renderTodos();
    };

    inputField.addEventListener("blur", saveChanges);

    inputField.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        saveChanges();
      } else if (e.key === "Escape") {
        todos[taskIndex].text = originalText;
        renderTodos();
      }
    });
  };

  // Function to handle enabling dragging on double-click
  const handleDoubleClick = () => {
    if (!sortableEnabled) {
      sortable.option("disabled", false); // Enable dragging
      sortableEnabled = true;
    }
  };

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

  // Initialize Sortable with dragging disabled
  const sortable = new Sortable(todoList, {
    animation: 300,
    disabled: true, // Disable dragging initially
    onEnd: function (e) {
      const movedTodo = todos.splice(e.oldIndex, 1)[0];
      todos.splice(e.newIndex, 0, movedTodo);
      saveTodos();
      renderTodos();
      sortable.option("disabled", true); // Disable dragging again
      sortableEnabled = false;
    },
  });

  addTodoButton.addEventListener("click", addTodo);

  todoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  });

  renderTodos();
});
