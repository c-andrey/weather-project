
import axios from 'axios';
import Units from '../types/Units';
import formatForecast from '../utils/FormatForecast';

const getForecast = async (lat: number, lon: number, metric: string): Promise<any> => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${metric}&exclude=hourly,minutely&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`)

  const { data } = response

  return formatForecast(data, Units[metric])
}

export default getForecast