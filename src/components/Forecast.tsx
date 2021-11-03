import styled from 'styled-components';
import ForecastCardInterface from '../types/ForecastCardInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import ForecastCard from './ForecastCard';
import dateBuilder from '../utils/DateBuilder';
import WeatherIcon from './WeatherIcon';
import Conditions from '../types/Conditions';

const ForecastStyled = styled.div`
  display:flex;
  flex-flow: column wrap;
  align-content: center;
  margin: 20px 100px;

  @media(max-width: 600px) {
    font-size: 12px;
  }
`

const LocalStyled = styled.div`
  font-size: 18px;
  display: flex;
  flex: 1;
  flex-flow: row;
  align-items: center;

  height: 160px;

  background-image: linear-gradient(#0181C2, #4BC4F7);
  border: 1px solid #ddd;
  border-radius: 7px;
  padding: 10px 5px;
  
  color: #fff;

  .current-image {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  .items {
    display: flex;
    flex-flow: column nowrap;
    margin-left: 20px;
  }

  .current-item {
    display: flex;
 
  }


  @media(max-width: 600px) {
    width: 100%;
    height: 150px;
    font-size: 10px;
  }
`

const AlertStyled = styled.div`
display: flex;
color: white;
height: 20px;
background-color: red;
border: 1px solid #ddd;
border-radius: 7px;
padding: 10px 5px;
`

const ForecastCardsStyled = styled.div`
display:flex;
flex-flow: row nowrap;
overflow: auto;
width: 100%;

.box {
  display: flex;
  min-height: min-content;
  padding: 10px 0;
}
`
export interface IForecastProps {
  forecast: ForecastCardInterface,
}

export default function Forecast ({forecast }: IForecastProps) {
  return (
    <ForecastStyled>
      <LocalStyled>
        {forecast.current.icon && forecast.current.weather && 
          <div className='current-image'> 
            <WeatherIcon icon={forecast.current.icon}/> 
            <div className="current-weather">{Conditions[forecast.current.weather]}</div>
          </div>
        }
        <div className="items">
          <div className="current-item date">{dateBuilder(new Date())}</div>
          <div className='current-item label'>{forecast.label}, {forecast.country}</div>
          <div className="current-item temperature">{forecast.current.temperature} {forecast.units}</div>
          <div className="current-item humidity">Umidade: {forecast.current.humidity}%</div>
        </div>
        </LocalStyled>
      {forecast.alerts && forecast.alerts.map((alert, index) => (<AlertStyled key={index}><FontAwesomeIcon icon={faExclamationTriangle}/> {alert.event}</AlertStyled>))}
      <ForecastCardsStyled>
        <div className='box'>
        {forecast.daily.map((day, index) => 
        <ForecastCard key={index} day={ day } unit={forecast.units} date={dateBuilder(new Date(), index)} />
        )}
        </div>
      </ForecastCardsStyled>
    </ForecastStyled>
  );
}
