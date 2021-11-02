export interface AlertsInterface {
  event: string
}
export interface DailyInterface {
  max: number,
  min: number,
  humidity: number,
  weather: string | null,
  description: string | null
}

export default interface ForecastInterface {
  current: {
    humidity: number,
    temperature: number
  },
  daily: DailyInterface[],
  alerts?: AlertsInterface[]
}