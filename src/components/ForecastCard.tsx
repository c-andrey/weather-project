import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Conditions from '../types/Conditions';
import { DailyInterface } from '../types/ForecastInterface';
import Units from '../types/Units';

export interface IForecastCardProps {
 day: DailyInterface,
 unit: string
}

const ForecastCardStyled = styled.div`
display: flex;
flex-flow: column wrap;
margin: 20px 20px;
width: 260px;
height: 200px;

background-image: linear-gradient(#0181C2, #4BC4F7);
border: 1px solid #ddd;
border-radius: 4px;
padding: 3px 3px;

color: #fff;
`


const ForecastCard = ({day, unit}: IForecastCardProps) => {

  return (
    <ForecastCardStyled>
      <div>Temperatura Min/Max: {day.min} {unit}/ {day.max} {unit}</div>
      <div>Umidade: {day.humidity} %</div>
      {day.weather && <div className='conditions'>
          <div>Condições Climáticas: {Conditions[day.weather]}</div>
        </div>
      }
    </ForecastCardStyled>
  );
}

export default ForecastCard
