const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");
const toggleColors = document.getElementById("toggle-colors");
const rootStyles = document.documentElement.style;

// Función para aplicar el tema guardado
function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme") || "light"; // Obtiene el tema guardado o por defecto "light"
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggleIcon.src = "assets/icons/moon.svg"; // Cambiar icono a luna
    toggleText.textContent = "tema oscuro"; // Cambiar texto
  } else {
    toggleIcon.src = "assets/icons/sun.svg"; // Cambiar icono a sol
    toggleText.textContent = "tema claro"; // Cambiar texto
  }
}

// Función para aplicar el color guardado
function applySavedColor() {
  const savedColor = localStorage.getItem("primaryColor") || "hsl(0, 70%, 60%)"; // Color por defecto
  rootStyles.setProperty("--primary-color", savedColor); // Aplica el color guardado
}

// Llama a las funciones para aplicar el tema y color guardados al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  applySavedTheme();
  applySavedColor();
});

// Cambiar el tema al hacer clic
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Cambiar el tema y guardar la preferencia
  if (document.body.classList.contains("dark")) {
    toggleIcon.src = "assets/icons/moon.svg";
    toggleText.textContent = "tema oscuro";
    localStorage.setItem("theme", "dark"); // Guarda el tema oscuro
  } else {
    toggleIcon.src = "assets/icons/sun.svg";
    toggleText.textContent = "tema claro";
    localStorage.setItem("theme", "light"); // Guarda el tema claro
  }
});

// Cambiar los colores al hacer clic en los elementos de color
toggleColors.addEventListener("click", (e) => {
  const selectedColor = e.target.dataset.color; // Obtiene el color seleccionado
  rootStyles.setProperty("--primary-color", selectedColor); // Cambia el color
  localStorage.setItem("primaryColor", selectedColor); // Guarda el color seleccionado
});
