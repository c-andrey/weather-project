import styled from 'styled-components';
import ForecastCardInterface from '../types/ForecastCardInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import ForecastCard from './ForecastCard';
import Units from '../types/Units';

const ForecastStyled = styled.div`
  display:flex;
  flex-flow: column wrap;
  align-content: center;
  margin: 20px 15px;
`

const LocalStyled = styled.div`
  font-size: 18px;
`

const AlertStyled = styled.div`

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

const CurrentStyled = styled.div`

`

export interface IForecastProps {
  forecast: ForecastCardInterface,
}

export default function Forecast ({forecast }: IForecastProps) {
  return (
    <ForecastStyled>
      <LocalStyled>
        <div className='label'>{forecast.label}, {forecast.country}</div>
        <div className="current-temperature">{forecast.current.temperature} {forecast.units}</div>
        <div className="current-humidity">Umidade: {forecast.current.humidity}%</div>
        </LocalStyled>
      {forecast.alerts && forecast.alerts.map((alert, index) => (<AlertStyled key={index}><FontAwesomeIcon icon={faExclamationTriangle}/> {alert}</AlertStyled>))}
      <ForecastCardsStyled>
        <div className='box'>
        {forecast.daily.map((day, index) => 
        <ForecastCard key={index} day={ day } unit={forecast.units} />
        )}
        </div>
      </ForecastCardsStyled>
    </ForecastStyled>
  );
}
