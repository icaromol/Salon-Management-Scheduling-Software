import { scheduleCancel } from "../../services/schedule-cancel"
import { schedulesDay } from "./load"
const periods = document.querySelectorAll(".period")

// Gera evento de clique para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
  // Captura o evento de clique na lista.
  period.addEventListener("click", async (event) => {
    if(event.target.classList.contains("cancel-icon")) {
      // Obtém a li pai do elemento clicado.
    const item = event.target.closest("li")
    
    // Pega o id do agendamento.
    const { id } = item.dataset
    console.log("ID capturado:", id)

    // Confirma que o id foi selecionado.
    if(id){
      // Confirma que o usuário quer cancelar.
      const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?"
      )

      // Faz a requisição na API para cancelar.
    if(isConfirm){
      await scheduleCancel({ id: Number(id) })
      
      // Recarrega os agendamentos na página.
      schedulesDay()
    }
    }
    }
  })
})
