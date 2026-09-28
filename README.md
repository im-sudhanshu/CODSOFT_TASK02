# CodSoft Frontend Internship: Task 2, To-Do List Application

A responsive task manager built with vanilla HTML, CSS, and JavaScript. Tasks are saved in the browser's Local Storage, so they persist after a refresh.

## Features

- Add tasks with validation (no empty tasks, max 100 characters)
- Edit existing tasks
- Delete tasks
- Mark tasks as completed or pending (click the task text)
- Persistent storage using Local Storage
- Live count of completed and pending tasks
- Search by task text
- Filter by All, Pending, or Completed
- Responsive layout for desktop and mobile

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (Flexbox, media queries) |
| Logic | JavaScript (ES6) |
| Storage | Web Storage API (`localStorage`) |

## Project Structure

```
CODSOFT_TASK2/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Clone the repository:
```bash
   git clone <your-repo-url>
```
2. Open the `CODSOFT_TASK2` folder.
3. Open `index.html` in any modern browser (or use VS Code Live Server).

No installation or build step is required.

## How It Works

- Tasks are stored as an array of objects: `{ id, text, done }`.
- Every add, edit, delete, or toggle calls `save()`, which writes the array to `localStorage` with `JSON.stringify`.
- On page load, the array is restored with `JSON.parse`.
- `render()` rebuilds the list from the array, applying the search text and the selected filter.

## Author

**Sudhanshu**
Final-year B.Tech CSE (AI & ML), Khwaja Moinuddin Chishti Language University
LinkedIn: <https://www.linkedin.com/in/sudhanshu-singh-6816642a6/>

#codsoft #internship #webdevelopment