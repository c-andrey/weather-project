const dateBuilder = (d: Date, plus?: number) => {
  let dateRaw = d
  if (plus !== undefined) {
    dateRaw.setDate(d.getDay() + plus + 1)
  }
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  const days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

  const day = days[d.getDay()];
  const date = d.getDate();
  const month = months[d.getMonth()];

  return `${day}, ${date} de ${month}`
}

export default dateBuilder