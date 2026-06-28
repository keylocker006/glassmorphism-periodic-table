const DATA_URL = "https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json";

async function init() {
    try {
        const response = await fetch(DATA_URL);
        const data = await response.json();
        // Log the elements to verify the data loaded
        console.log(data.elements);
    } catch (error) {
        console.error("Failed to load periodic table data:", error);
    }
}

const CATEGORY_CLASSES = {
    "diatomic nonmetal": "diatomic-nonmetal",
    "noble gas": "noble-gas",
    "alkali metal": "alkali-metal",
    "alkaline earth metal": "alkaline-earth-metal",
    "metalloid": "metalloid",
    "polyatomic nonmetal": "polyatomic-nonmetal",
    "post-transition metal": "post-transition-metal",
    "transition metal": "transition-metal",
    "lanthanide": "lanthanide",
    "actinide": "actinide"
};

// Legend display data: name, CSS class, and swatch color for each category
const LEGEND_CATEGORIES = [
    { name: "Alkali Metal", class: "alkali-metal", color: "rgba(255, 80, 80, 0.5)" },
    { name: "Alkaline Earth Metal", class: "alkaline-earth-metal", color: "rgba(255, 170, 0, 0.5)" },
    { name: "Transition Metal", class: "transition-metal", color: "rgba(79, 187, 98, 0.5)" },
    { name: "Post-transition Metal", class: "post-transition-metal", color: "rgba(245, 57, 81, 0.5)" },
    { name: "Metalloid", class: "metalloid", color: "rgba(255, 165, 0, 0.5)" },
    { name: "Nonmetal", class: "diatomic-nonmetal", color: "rgba(0, 182, 188, 0.5)" },
    { name: "Noble Gas", class: "noble-gas", color: "rgba(206, 7, 173, 0.5)" },
    { name: "Lanthanide", class: "lanthanide", color: "rgba(100, 149, 237, 0.5)" },
    { name: "Actinide", class: "actinide", color: "rgba(150, 111, 214, 0.5)" },
    { name: "Unknown", class: "unknown", color: "rgba(180, 180, 180, 0.4)" }
];

let elementsData = [];

function getCategoryClass(category) {
    if (!category) return "unknown";
    for (const [key, value] of Object.entries(CATEGORY_CLASSES)) {
        if (category.includes(key)) return value;
    }
    return "unknown";
}

function createElement(element) {
    const div = document.createElement("div");
    const categoryClass = getCategoryClass(element.category);
    div.className = `element ${categoryClass}`;
    // Position on the grid using coordinates from the JSON
    div.style.gridColumn = element.xpos;
    div.style.gridRow = element.ypos;

    div.innerHTML = `
        <span class="atomic-number">${element.number}</span>
        <span class="symbol">${element.symbol}</span>
        <span class="name">${element.name}</span>
        <span class="mass">${element.atomic_mass.toFixed(2)}</span>
        <span class="electron-config">${element.electron_configuration_semantic}</span>
    `;
    div.addEventListener("click", () => openModal(element));
    return div;
}

function openModal(element) {
    const overlay = document.getElementById("modal-overlay");
    const content = document.getElementById("modal-content");

    content.innerHTML = `
        <div class="modal-symbol">${element.symbol}</div>
        <h2>${element.name}</h2>
        <div class="modal-detail"><span>Atomic Number: </span>${element.number}</div>
        <div class="modal-detail"><span>Atomic Mass: </span>${element.atomic_mass.toFixed(4)}</div>
        <div class="modal-detail"><span>Electron Configuration: </span>${element.electron_configuration_semantic}</div>
        <div class="modal-detail"><span>Phase: </span>${element.phase || "Unknown"}</div>
        <div class="modal-detail"><span>Density: </span>${element.density ? element.density + " g/cm\u00B3" : "Unknown"}</div>
        <div class="modal-detail"><span>Discovered By: </span>${element.discovered_by || "Unknown"}</div>
        <div class="modal-detail"><span>Category: </span>${element.category || "Unknown"}</div>
        <div class="modal-summary">${element.summary || "No summary available."}</div>
    `;

    overlay.classList.add("active");
}

function closeModal() {
    const overlay = document.getElementById("modal-overlay");
    overlay.classList.remove("active");
}

function createLegend() {
    const legend = document.getElementById("legend");

    // Loop through each category and create a colored swatch + label
    LEGEND_CATEGORIES.forEach(cat => {
        const item = document.createElement("div");
        item.className = "legend-item";

        const color = document.createElement("div");
        color.className = "legend-color";
        color.style.backgroundColor = cat.color;

        const label = document.createElement("span");
        label.textContent = cat.name;

        item.appendChild(color);
        item.appendChild(label);
        legend.appendChild(item);
    });
}

async function init() {
    try {
        const response = await fetch(DATA_URL);
        const data = await response.json();
        elementsData = data.elements;
        const table = document.getElementById("periodic-table");

        // Loop through all elements and add each tile to the grid
        elementsData.forEach(element => {
            const el = createElement(element);
            table.appendChild(el);
        });

        createLegend();
                document.getElementById("modal-close").addEventListener("click", closeModal);
        document.getElementById("modal-overlay").addEventListener("click", (e) => {
            if (e.target === e.currentTarget) closeModal();
        });
    } catch (error) {
        console.error("Failed to load periodic table data:", error);
        document.getElementById("periodic-table").innerHTML =
            '<p style="color: white; grid-column: 1 / -1;">Failed to load element data. Please check your internet connection.</p>';
    }
}

init();