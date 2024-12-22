import { apiConfig  } from "./api-config";
import dayjs from "dayjs";

export async function scheduleFetchByDate({ date }) {
  try {
    // Fazendo a requisição.
    const response = await fetch(`${apiConfig.baseURL}/schedules`)
   
    // Converte para JSON
    const data = await response.json()

    // Filtra os agendamentos pelo dia selecionado.
    const dailySchedules = data.filter((schedule) => 
      dayjs(date).isSame(schedule.when, "day")
  )

    return dailySchedules

  } catch (error) {
    console.log(error);
    alert("Não é possível ver os agendamentos deste dia.")
  }
}