// Crear el círculo personalizado del cursor
const cursor = document.createElement("div");
cursor.classList.add("cursor-circle");
document.body.appendChild(cursor);

// Hacer que siga al mouse
document.addEventListener("mousemove", e => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});
