# 🎂 Age Calculator

A clean and simple **Age Calculator** web app built with HTML, CSS, and JavaScript. Enter your date of birth and instantly find out your current age!

---

## 🚀 Live Demo

Open `index.html` in any modern browser to run the project locally.

---

## 📸 Features

- 📅 **Date Picker** — Easy-to-use date input to select your birth date
- ⚡ **Instant Calculation** — Click the button and get your age right away
- ✅ **Input Validation** — Alerts the user if no date is entered
- 🎨 **Clean UI** — Centered card layout with a green calculate button and bisque background

---

## 🗂️ Project Structure

```
Age_Calculatore/
├── index.html   # Main HTML structure
├── style.css    # Styling and layout
├── index.js     # Age calculation logic
└── README.md    # Project documentation
```

---

## 🛠️ Tech Stack

| Technology | Purpose            |
|------------|--------------------|
| HTML5      | Page structure     |
| CSS3       | Styling & layout   |
| JavaScript | Age calculation logic |

---

## ⚙️ How It Works

1. The user selects their **date of birth** using the date input field.
2. On clicking **Calculate Age**, the `ageCalculate()` function is triggered.
3. The function:
   - Reads the selected date value.
   - Creates a `Date` object from the user input.
   - Compares it with today's date using `getFullYear()` and `getMonth()`.
   - Displays the calculated age in the result area.
4. If no date is entered, an **alert** prompts the user to fill in their date of birth.

---

## 📦 Getting Started

### Prerequisites

No installations needed! Just a modern web browser (Chrome, Firefox, Edge, Safari).

### Run Locally

1. **Clone or download** this repository.
2. Open the `Age_Calculatore` folder.
3. Double-click `index.html` — it opens directly in your browser.

---

## 📁 File Overview

### `index.html`
Defines the page layout with:
- A heading: **Age Calculator**
- A `label` and `date` input for date of birth
- A **Calculate Age** button wired to `ageCalculate()`
- An `<h2>` output element that shows the result

### `style.css`
Handles the visual design:
- Centered full-viewport layout using **Flexbox**
- White card container with rounded corners and a shadow
- Green styled button for the call-to-action
- Bisque background for a warm look

### `index.js`
Contains the core logic:
```js
function ageCalculate() {
    let input = document.getElementById("input").value;
    let result = document.getElementById("output");

    let currentDate = new Date();
    let birthdate = new Date(input);
    let age = currentDate.getFullYear() - birthdate.getFullYear();

    if (input === "") {
        alert("Enter Your age");
    } else {
        result.innerText = `Your Age is: ${age}`;
    }
}
```

---

## 🙌 Author

**Suriyan Ravi**

---

## 📄 License

This project is open source and free to use for learning and personal projects.
