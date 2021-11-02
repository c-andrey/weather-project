import Form from './Form';
import '../styles/Weather.css'
import { useEffect, useState } from 'react';
import ForecastCardInterface from '../types/ForecastCardInterface';
import Forecast from './Forecast';
export interface IWeatherProps {
}


const Weather = (props: IWeatherProps) => {
  const [forecast, setForecast] = useState<ForecastCardInterface>()

  return (
    <div className="main">
      <Form callback={setForecast}/>
      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
}

export default Weather;