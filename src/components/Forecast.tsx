import Conditions from '../types/Conditions';
import ForecastCardInterface from '../types/ForecastCardInterface';

export interface IForecastProps {
  forecast: ForecastCardInterface,
}

export default function Forecast ({forecast }: IForecastProps) {
  return (
    <div className='forecast'>
      <div className='local'>{forecast.label}, {forecast.country}</div>
      {forecast.alerts && forecast.alerts.map((alert, index) => (<div className='alerts'>{alert}</div>))}
      {forecast.daily.map((day, index) => (
        <div className='forecast-card'>
          <div>Temperatura mínima: {day.min}</div>
          <div>Temperatura máxima: {day.max}</div>
          <div>Humidade: {day.humidity}</div>
          {day.weather && <div className='conditions'>
              <div>Condições Climáticas: {Conditions[day.weather]}</div>
            </div>
          }

        </div>
      ))}
    </div>
  );
}
