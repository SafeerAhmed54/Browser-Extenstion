document.addEventListener("DOMContentLoaded", function () {
  const allButton = document.getElementById("all");
  const activeButton = document.getElementById("active");
  const inactiveButton = document.getElementById("inactive");
  const grid = document.getElementById("extensions-grid");
  const themeBtn = document.getElementById("theme-button");
  const themeIcon = document.getElementById("theme-icon")
  const root = document.documentElement;

  let allExtensions = []; // store raw data
  let currentFilter = "all"; // track active filter
  let currentTheme = "dark";

  setActiveButton(allButton);

  themeBtn.addEventListener("click",function(){
    if(currentTheme == "dark"){
      lightTheme();
      currentTheme = "light";
    }
    else if(currentTheme == "light"){
      darkTheme();
      currentTheme = "dark";
    }
  })

  function darkTheme(){
    root.style.setProperty("--background-color" , 'linear-gradient(180deg, #040918 0%, #091540 100%)')
    root.style.setProperty("--text-color", 'hsl(200, 60%, 99%)');
    root.style.setProperty("--card-background", 'hsl(226, 25%, 17%)');
    root.style.setProperty("--button-background", 'hsl(225, 23%, 24%)');
  }

  function lightTheme(){
    root.style.setProperty("--background-color" , 'linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)')
    root.style.setProperty("--text-color", 'hsl(227, 75%, 14%)');
    root.style.setProperty("--card-background", 'hsl(200, 60%, 99%)');
    root.style.setProperty("--button-background", 'hsl(200, 60%, 99%)');

  }

  // Set active button style
  function setActiveButton(selected) {
    [allButton, activeButton, inactiveButton].forEach((btn) => {
      btn.classList.remove("active-filter", "bg-red-500");
      btn.classList.add("bg-slate-600");
      btn.classList.remove("active-filter", "text-slate-900");
    });
    selected.classList.remove("bg-slate-600");
    selected.classList.add("active-filter", "bg-red-500");
    selected.classList.add("active-filter", "text-slate-900");
  }

  // Build a single card element
  function createCard(extension) {
    const card = document.createElement("div");
    card.classList.add("card-here");
    card.dataset.active = extension.isActive; // store state on the element

    card.innerHTML = `
      <div class="flex gap-5">
        <img src="${extension.logo}" alt="${extension.name}" class="self-start">
        <div class="flex flex-col gap-2">
          <h2 class="card-heading">${extension.name}</h2>
          <p class="paragraph-color">${extension.description}</p>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <button class="remove-button">Remove</button>
        <label class="switch">
          <input type="checkbox" ${extension.isActive ? "checked" : ""}>
          <span class="slider round"></span>
        </label>
      </div>
    `;

    // Toggle active state on switch change
    const toggle = card.querySelector('input[type="checkbox"]');
    toggle.addEventListener("change", function () {
      extension.isActive = this.checked;
      card.dataset.active = this.checked;
      renderCards(currentFilter); // re-render to respect current filter
    });

    // Remove card
    const removeBtn = card.querySelector(".remove-button");
    removeBtn.addEventListener("click", function () {
      allExtensions = allExtensions.filter((e) => e !== extension);
      renderCards(currentFilter);
    });

    return card;
  }

  // Render cards based on filter
  function renderCards(filter) {
    currentFilter = filter;
    grid.innerHTML = ""; // clear grid

    const filtered = allExtensions.filter((ext) => {
      if (filter === "active") return ext.isActive === true;
      if (filter === "inactive") return ext.isActive === false;
      return true; // "all"
    });

    filtered.forEach((ext) => {
      grid.appendChild(createCard(ext));
    });
  }

  // Fetch data and initialise
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      allExtensions = data;
      renderCards("all");
    });

  allButton.addEventListener("click", function () {
    setActiveButton(allButton);
    renderCards("all");
  });

  activeButton.addEventListener("click", function () {
    setActiveButton(activeButton);
    renderCards("active");
  });

  inactiveButton.addEventListener("click", function () {
    setActiveButton(inactiveButton);
    renderCards("inactive");
  });
});