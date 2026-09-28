let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editId = null;

const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const btn = document.getElementById("submitBtn");
const error = document.getElementById("error");
const search = document.getElementById("search");
const filter = document.getElementById("filter");
const stats = document.getElementById("stats");
const list = document.getElementById("taskList");

const save = () => localStorage.setItem("tasks", JSON.stringify(tasks));

form.addEventListener("submit", e => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return (error.textContent = "Task cannot be empty.");
  if (text.length > 100) return (error.textContent = "Max 100 characters.");
  error.textContent = "";

  if (editId) {
    tasks = tasks.map(t => (t.id === editId ? { ...t, text } : t));
    editId = null;
    btn.textContent = "Add";
  } else {
    tasks.push({ id: Date.now(), text, done: false });
  }
  input.value = "";
  save();
  render();
});

function render() {
  const q = search.value.toLowerCase();
  const f = filter.value;
  list.innerHTML = "";

  tasks
    .filter(t => t.text.toLowerCase().includes(q))
    .filter(t => f === "all" || (f === "completed") === t.done)
    .forEach(t => {
      const li = document.createElement("li");
      if (t.done) li.classList.add("done");

      const span = document.createElement("span");
      span.textContent = t.text;
      span.onclick = () => { t.done = !t.done; save(); render(); };

      const edit = document.createElement("button");
      edit.textContent = "Edit";
      edit.onclick = () => {
        input.value = t.text;
        editId = t.id;
        btn.textContent = "Save";
        input.focus();
      };

      const del = document.createElement("button");
      del.textContent = "Delete";
      del.onclick = () => {
        tasks = tasks.filter(x => x.id !== t.id);
        if (editId === t.id) { editId = null; btn.textContent = "Add"; input.value = ""; }
        save();
        render();
      };

      li.append(span, edit, del);
      list.append(li);
    });

  const done = tasks.filter(t => t.done).length;
  stats.textContent = `Completed: ${done} | Pending: ${tasks.length - done}`;
}

search.addEventListener("input", render);
filter.addEventListener("change", render);
render();