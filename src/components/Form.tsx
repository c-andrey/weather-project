import { Formik } from 'formik';
import * as Yup from "yup";
import styled from 'styled-components';
import '../styles/Form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import CustomSelect from './custom/CustomSelect';
import getForecast from '../services/getForecast';
import OptionsInterface from '../types/OptionsInterface';
import { ChangeEvent, useEffect, useState } from 'react';
import getCities from '../services/getCities';
import ForecastCardInterface from '../types/ForecastCardInterface';
import React from 'react';
import Units from '../types/Units';


export interface IFormProps {
  callback: (s: ForecastCardInterface) => void
}

const Form = ( {callback }: IFormProps ) => {
  const [units, setUnits] = useState('metric')
  const [city, setCity] = useState<OptionsInterface>()
  const [message, setMessage] = useState<string>('')

  const handleUnitsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUnits(event.target.value)
    handleForm()
  }

  useEffect(() => {
    const handleForm = async (): Promise<void> => {
      try {
        if (!city) {
          throw new Error('Deve preencher uma cidade para pesquisar')
        }
        
        const forecast = await getForecast(city.lat, city.lon, units)
  
        callback({ ...city, ...forecast})
      } catch (error: any) {
        setMessage(error.stack)
      }
    }
    handleForm()
  }, [callback, city, units])

  const handleForm = async (): Promise<void> => {
    try {
      if (!city) {
        throw new Error('Deve preencher uma cidade para pesquisar')
      }
      
      const forecast = await getForecast(city.lat, city.lon, units)

      callback({ ...city, ...forecast, units})
    } catch (error: any) {
      setMessage(error.stack)
    }
  }
  return (
    <div className='form'>
      <CustomSelect<OptionsInterface> callback={setCity} getOptions={getCities}></CustomSelect>
      <div className="units" onChange={handleUnitsChange}>
          <input type="radio" defaultChecked value="metric" name="unit" /> °C
          <input type="radio" value="imperial" name="unit" /> °F
      </div>
    </div>
  );
}

export default Form;
