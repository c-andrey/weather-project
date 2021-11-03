import axios, { AxiosResponse } from "axios"

const getIcon = async (icon: string): Promise<string> => {
  try {
    const data: string = await axios.get(`http://openweathermap.org/img/wn/${icon}@4x.png`)

    return data
  } catch (error) {
    throw error
  }
}

export default getIcon