document.addEventListener("DOMContentLoaded", function () {
  const allButton = document.getElementById("all");
  const activeButton = document.getElementById("active");
  const inactive = document.getElementById("inactive");

  console.log("Active button is "+ activeButton.textContent)

  // 1. Fetch the JSON data
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      // 2. Get the container where cards will go
      const grid = document.getElementById("extensions-grid");

      activeButton.addEventListener("mouseenter", function () {
        console.log("Hello hovered")
        data.forEach((extension) => {
          // Create the card HTML here
          const card = document.createElement("div");
          card.classList.add("card-here");
          console.log(extension.isActive)
          if (extension.isActive) {
            card.innerHTML = `
        <div class="flex gap-5">
                <img src="${extension.logo}" alt="devlens" class="self-start">
                <div class="flex flex-col gap-2">
                  <h2 class="text-white font-bold text-lg">${extension.name}</h2>
                  <p class="paragraph-color">${extension.description}</p>
                </div>
              </div>
              <div class="flex justify-between item-center">
                <button class="remove-button">Remove</button>
                <!-- Rounded switch -->
                <label class="switch">
                  <input type="checkbox" ${extension.isActive ? "checked" : ""}>
                  <span class="slider round"></span>
                </label>
              </div>
      `;
            grid.appendChild(card);
          }
          else{
            rem
          }
        });
      });
      // 3. Loop through each extension and create HTML
      data.forEach((extension) => {
        // Create the card HTML here
        const card = document.createElement("div");
        card.classList.add("card-here");

        card.innerHTML = `
        <div class="flex gap-5">
                <img src="${extension.logo}" alt="devlens" class="self-start">
                <div class="flex flex-col gap-2">
                  <h2 class="text-white font-bold text-lg">${extension.name}</h2>
                  <p class="paragraph-color">${extension.description}</p>
                </div>
              </div>
              <div class="flex justify-between item-center">
                <button class="remove-button">Remove</button>
                <!-- Rounded switch -->
                <label class="switch">
                  <input type="checkbox" ${extension.isActive ? "checked" : ""}>
                  <span class="slider round"></span>
                </label>
              </div>
      `;

        grid.appendChild(card);
      });
    });
});
