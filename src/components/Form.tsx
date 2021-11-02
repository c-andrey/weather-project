import { Formik } from 'formik';
import * as Yup from "yup";
import FormInterface from '../types/FormInterface';
import styled from 'styled-components';
import '../styles/Form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import CustomSelect from './custom/CustomSelect';
import getForecast from '../services/getForecast';
import OptionsInterface from '../types/OptionsInterface';
import { useState } from 'react';


export interface IFormProps {

}

const Form = ( props: IFormProps ) => {
  const [forecast, setforecast] = useState('')
  const handleForm = ( city: OptionsInterface ): void => {
    try {
      console.log(getForecast(city.label, 'metric'))
      
    } catch (error) {
      throw error
    }
  }
  return (
    <div className='form'>
      <CustomSelect callback={handleForm}></CustomSelect>
    </div>
  );
}

export default Form;
