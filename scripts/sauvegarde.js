const KEY = "acnh-routine";
const today = new Date(Date.now() - 5*3600*1000).toLocaleDateString("fr-CA");

let state = JSON.parse(localStorage.getItem(KEY) || "{}");

if (state.date !== today) {
    state = { date: today, checked: {} };
    localStorage.setItem(KEY, JSON.stringify(state));
}

document.querySelectorAll("input[type=checkbox]").forEach(box => {
    box.checked = !!state.checked[box.dataset.id];
    box.addEventListener("change", () => {
        state.checked[box.dataset.id] = box.checked;
        localStorage.setItem(KEY, JSON.stringify(state));
    });
});