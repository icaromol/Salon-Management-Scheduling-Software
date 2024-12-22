export function hoursClick() {
  const hours = document.querySelectorAll('.hour-available');
  
  hours.forEach((available) => {
    available.addEventListener("click", () => {
      // Remove a classe "hour-selected" de todos os elementos
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });
      
      // Adiciona a classe "hour-selected" ao elemento clicado
      available.classList.add("hour-selected");
    });
  });
}
