
# Glassmorphism Periodic Table

An interactive, responsive, and modern Periodic Table of Elements built with vanilla HTML, CSS Grid, and JavaScript. The project fetches dynamic data for all 118 elements and renders them in an ultra-modern "Glassmorphism" (frosted glass) design.

## 🚀 Live Demo

*Add your GitHub Pages link here once deployed!*
*Example: `https://yourusername.github.io/glassmorphism-periodic-table/`*

## ✨ Features

- **Dynamic Data Rendering:** Uses the JavaScript Fetch API to retrieve full periodic table properties (including atomic mass, category, configuration, and grid coordinates) from an open-source JSON dataset.
- **Accurate CSS Grid Layout:** Eliminates complex hardcoding by using dynamic inline grid column (`gridColumn`) and row (`gridRow`) styling coordinates received directly from the JSON.
- **Glassmorphism Styling:** Implements advanced modern CSS styling including transparency, subtle borders, shadows, and the `backdrop-filter: blur()` effect to simulate real frosted glass.
- **Color-Coded Legend:** Intuitively groups and matches element categories (e.g., transition metals, noble gases, lanthanides) with a dynamic, clean color palette.
- **Clean Responsive Structure:** Ensures elements fit on standard screens and remain readable.

## 🛠️ Technologies Used

- **HTML5:** Semantic markup structure for the grid container and category legend.
- **CSS3 / CSS Grid:** Multi-column layout grids, custom CSS variables, and modern Glassmorphism visual properties.
- **JavaScript (ES6):** Asynchronous fetch requests, DOM manipulation, custom object mappings, and error-handling.

## 📂 Project Structure

```text
glassmorphism-periodic-table/
│
├── index.html       # The structural boilerplate and grid container
├── style.css        # Glassmorphic themes, responsive grids, and typography
├── script.js        # Data fetching, element mapping, and DOM construction
└── README.md        # Documentation
```

## 💻 How to Run Locally

Since this project fetches element data using the browser’s `fetch()` API, running it via direct file double-clicking (`file://` protocol) will trigger CORS browser blocks. You must host it using a local server:

### Option 1: VS Code Live Server (Recommended)
1. Open the project folder in **VS Code**.
2. Right-click on `index.html`.
3. Select **Open with Live Server**.
4. Your default browser will launch at `http://127.0.0.1:5500`.

### Option 2: Python HTTP Server (Command Line)
If you prefer using the terminal, run the following command in your project directory:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your web browser.

## 📝 Learning Goals Achieved

- Mapping JSON properties dynamically into custom HTML templates using JS Template Literals.
- Developing flexible grid-based placements by overriding `grid-row` and `grid-column` styles on the fly.
- Handling asynchronous network request flows using `async/await` and robust `try...catch` blocks.
- Mastering the fine-tuned parameters of CSS variables, opacity, box shadows, and background blurs.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues/).

## 📄 License

This project is licensed under the MIT License.
