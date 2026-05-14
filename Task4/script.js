// ============================
// TO-DO LIST WITH LOCAL STORAGE
// ============================

const taskInput = document.getElementById("taskInput");

const taskList = document.getElementById("taskList");

// Load Tasks
window.onload = function () {
  loadTasks();

  displayProducts(products);
};

// Add Task
function addTask() {
  const task = taskInput.value;

  if (task === "") {
    alert("Please enter a task");

    return;
  }

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  taskInput.value = "";

  loadTasks();
}

// Load Tasks Function
function loadTasks() {
  taskList.innerHTML = "";

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
            ${task}
            <button onclick="deleteTask(${index})">
                Delete
            </button>
        `;

    taskList.appendChild(li);
  });
}

// Delete Task
function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.splice(index, 1);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  loadTasks();
}

// ============================
// PRODUCT LISTING
// ============================

const products = [
  {
    name: "Laptop",
    category: "electronics",
    price: 50000,
  },

  {
    name: "Mobile",
    category: "electronics",
    price: 20000,
  },

  {
    name: "T-Shirt",
    category: "fashion",
    price: 1000,
  },

  {
    name: "Shoes",
    category: "fashion",
    price: 3000,
  },
];

// Display Products
function displayProducts(productArray) {
  const container = document.getElementById("productContainer");

  container.innerHTML = "";

  productArray.forEach((product) => {
    const card = document.createElement("div");

    card.classList.add("product-card");

    card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: ₹${product.price}</p>
        `;

    container.appendChild(card);
  });
}

// Filter Products
function filterProducts() {
  const category = document.getElementById("filterCategory").value;

  if (category === "all") {
    displayProducts(products);

    return;
  }

  const filteredProducts = products.filter(
    (product) => product.category === category,
  );

  displayProducts(filteredProducts);
}

// Sort Products
function sortProducts() {
  const option = document.getElementById("sortOption").value;

  let sortedProducts = [...products];

  if (option === "low-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (option === "high-low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  displayProducts(sortedProducts);
}
