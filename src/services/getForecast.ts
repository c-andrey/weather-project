
import axios from 'axios';

const getForecast = async (cityName: string, metric: string): Promise<any[]> => {
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units${metric}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`)

  const { data } = response

  return data
}

export default getForecast