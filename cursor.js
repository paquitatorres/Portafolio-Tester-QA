// Crear el círculo personalizado del cursor
const cursor = document.createElement("div");
cursor.classList.add("cursor-circle");
document.body.appendChild(cursor);

// Hacer que siga al mouse
document.addEventListener("mousemove", e => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});


const hamburger= document.querySelector(".hamburger");
const navMenu= document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n. 
    addEventListener("click",()=>{ 
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))










