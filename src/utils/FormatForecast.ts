import ForecastInterface from "../types/ForecastInterface"

const formatForecast = (forecast: any): ForecastInterface => {
  try {
    return {
      current: {
        humidity: forecast.current.humidity,
        temperature: forecast.current.temp
      },
      daily : forecast.daily.map((day: any) => ({
        max: parseInt(day.temp.max),
        min: parseInt(day.temp.min),
        humidity: day.humidity,
        weather: day.weather[0].main ? day.weather[0].main : null,
        description: day.weather[0].description ? day.weather[0].description : null
      })),
      alerts: forecast.current?.alerts
    }
  } catch (error) {
    throw error
  }
}

export default formatForecast