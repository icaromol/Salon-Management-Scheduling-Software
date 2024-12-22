import { apiConfig } from "./api-config.js"

export async function scheduleNew({ id, name, when }) {
try  {
  // Requisição para enviar os dados de agendamento
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, name, when}),
    })
// Mensagem de agendamento.
      alert("Agendamento realizado com sucesso!")
      
     } catch (error) {
      console.log(error)
     alert("Não foi possível agendar. Tente novamente mais tarde.")
     }
}