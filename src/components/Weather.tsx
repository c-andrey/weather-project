import * as React from 'react';
import Form from './Form';
import '../styles/Weather.css'
export interface IWeatherProps {
}


export default function Weather (props: IWeatherProps) {
  return (
    <div className="main">
      <Form />
    </div>
  );
}
