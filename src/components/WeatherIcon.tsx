import React from 'react';
import styled from 'styled-components';
export interface IWeatherIconProps {
  icon: string
}

const ImgStyled = styled.img`
  width: 140px;
  height: 140px;
`

const WeatherIcon = (props: IWeatherIconProps) => {

  return (
    <ImgStyled src={`https://openweathermap.org/img/wn/${props.icon}@4x.png`} alt="Icon"/>
  );
};

export default WeatherIcon;
