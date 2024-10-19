// SIDE BAR TOGGLE FUNC

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }

  console.log(!sidebarOpen);
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}

// Function to render sidebar items
const sidebarItems = [
  "Home",
  "Events",
  "Speakers",
  "Reports",
  "Notifications",
  "Messages",
  "Settings",
  "Collapse",
  "Dark mode",
];

function renderSidebarItems() {
  const sidebarElement = document.getElementById("sidebar");
  sidebarElement.innerHTML = "";

  // Create and append list items
  sidebarItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    sidebarElement.appendChild(listItem);
  });
}

// Call the function to render items on page load
renderSidebarItems();
