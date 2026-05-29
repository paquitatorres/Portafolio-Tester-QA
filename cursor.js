// Crea el círculo personalizado del cursor
const cursor = document.createElement("div");
cursor.classList.add("cursor-circle");
document.body.appendChild(cursor);

// Hacer que siga al mouse
document.addEventListener("mousemove", e => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Desaparecerlo en movile y en pantallas pequeñas
if (window.matchMedia("(pointer: coarse)").matches) {
  cursor.style.display = "none";
  document.body.style.cursor = "auto";
}


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




const btn = document.getElementById('lang-btn');
let active = false;

btn.addEventListener('click', () => {
  active = !active;

  document.querySelectorAll('.en').forEach(el => el.style.display = active ? 'none' : '');
  document.querySelectorAll('.es').forEach(el => el.style.display = active ? 'inline' : 'none');

  btn.classList.toggle('active', active);
  btn.title = active ? 'Switch to English' : 'Traducir al español';
});