import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import getIcon from '../services/getIcon';
import Conditions from '../types/Conditions';
import { DailyInterface } from '../types/ForecastInterface';
import Units from '../types/Units';
import dateBuilder from '../utils/DateBuilder';
import WeatherIcon from './WeatherIcon';

export interface IForecastCardProps {
 day: DailyInterface,
 unit: string,
 date: string
}

const ForecastCardStyled = styled.div`
display: flex;
flex-flow: column wrap;
margin: 20px 20px;
width: 240px;
height: 300px;

align-items: center;

background-image: linear-gradient(#0181C2, #4BC4F7);
border: 1px solid #ddd;
border-radius: 7px;
padding: 10px 5px;

color: #fff;

.forecast__card-info {
  display: flex;
  align-items: flex-start;
  flex: 1;
  flex-flow: column wrap;
  justify-content: space-evenly;
}
`


const ForecastCard = ({day, unit, date}: IForecastCardProps) => {

  return (
    <ForecastCardStyled>
      <div className="date">{date}</div>
      {day.icon && <WeatherIcon icon={day.icon}/> }
      <div className="forecast__card-info">
        <div className='forecast__card-item'>Temperatura: {day.min} {unit}/ {day.max} {unit}</div>
        <div className='forecast__card-item'>Umidade: {day.humidity} %</div>
        {day.weather && <div className='conditions'>
            <div className='forecast__card-item'>Condições Climáticas: {Conditions[day.weather]}</div>
          </div>
        }
      </div>
    </ForecastCardStyled>
  );
}

export default ForecastCard
