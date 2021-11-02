import axios, { AxiosResponse } from 'axios';
import CitiesInterface from '../types/CitiesInterface';
import OptionsInterface from '../types/OptionsInterface';
import formatCities from '../utils/FormatCities';

const getCities = async (cityName: string): Promise<OptionsInterface[]> => {
  const response: AxiosResponse<CitiesInterface[]> = await axios.get<CitiesInterface[]>(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=10&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`)

  const { data } = response

  return formatCities(data)
}

export default getCities