import ForecastInterface from "../types/ForecastInterface"

const formatForecast = (forecast: any, units: string): ForecastInterface => {
  try {
    return {
      current: {
        humidity: forecast.current.humidity,
        temperature: parseInt(forecast.current.temp),
        icon: forecast.current.weather[0].icon ? forecast.current.weather[0].icon : null,
        weather: forecast.current.weather[0].main ? forecast.current.weather[0].main : null,
      },
      daily : forecast.daily.map((day: any) => ({
        max: parseInt(day.temp.max),
        min: parseInt(day.temp.min),
        humidity: day.humidity,
        weather: day.weather[0].main ? day.weather[0].main : null,
        description: day.weather[0].description ? day.weather[0].description : null,
        icon: day.weather[0].icon ? day.weather[0].icon : null
      })),
      alerts: forecast?.alerts,
      units
    }
  } catch (error) {
    throw error
  }
}

export default formatForecast