import Units from "./Units";

export interface AlertsInterface {
  event: string
}
export interface DailyInterface {
  max: number,
  min: number,
  humidity: number,
  weather: string | null,
  description: string | null,
  icon: string | null
}

export default interface ForecastInterface {
  current: {
    humidity: number,
    temperature: number,
    weather: string | null,
    icon: string | null
  },
  daily: DailyInterface[],
  alerts?: AlertsInterface[],
  units: typeof Units
}