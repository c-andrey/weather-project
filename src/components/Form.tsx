import { Formik } from 'formik';
import * as Yup from "yup";
import styled from 'styled-components';
import '../styles/Form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import CustomSelect from './custom/CustomSelect';
import getForecast from '../services/getForecast';
import OptionsInterface from '../types/OptionsInterface';
import { useState } from 'react';
import getCities from '../services/getCities';
import ForecastCardInterface from '../types/ForecastCardInterface';


export interface IFormProps {
  callback: (s: ForecastCardInterface) => void
}

const Form = ( {callback }: IFormProps ) => {
  const handleForm = async ( city: OptionsInterface ): Promise<void> => {
    try {
      const forecast = await getForecast(city.lat, city.lon, 'metric')

      callback({ ...city, ...forecast})
    } catch (error) {
      throw error
    }
  }
  return (
    <div className='form'>
      <CustomSelect<OptionsInterface> callback={handleForm} getOptions={getCities}></CustomSelect>
    </div>
  );
}

export default Form;
