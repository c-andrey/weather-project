
import axios from 'axios';
import Units from '../types/Units';
import formatForecast from '../utils/FormatForecast';

const getForecast = async (lat: number, lon: number, metric: string): Promise<any> => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${metric}&exclude=hourly,minutely&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`)
  
    const { data, status } = response
    
    if (status === 401) {
      throw new Error('Acesso não autorizado, sua api deve estar desatualizada')
    }

    if (status !== 200) {
      throw new Error('Erro ao obter previsões')
    }
  
    return formatForecast(data, Units[metric])
    
  } catch (error) {
    throw error
  }
}

export default getForecast