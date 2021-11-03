import '../styles/Form.css'
import CustomSelect from './custom/CustomSelect';
import getForecast from '../services/getForecast';
import OptionsInterface from '../types/OptionsInterface';
import { ChangeEvent, useEffect, useState } from 'react';
import getCities from '../services/getCities';
import ForecastCardInterface from '../types/ForecastCardInterface';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
export interface IFormProps {
  callback: (s: ForecastCardInterface) => void
}

const AlertStyled = styled.div`
color: red;
margin-top:5px;
`

const Form = ( {callback }: IFormProps ) => {
  const [units, setUnits] = useState('metric')
  const [city, setCity] = useState<OptionsInterface>()
  const [message, setMessage] = useState('')

  const handleUnitsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUnits(event.target.value)
    handleForm()
  }

  useEffect(() => {
    const handleForm = async (): Promise<void> => {
        if (city) {
          const forecast = await getForecast(city.lat, city.lon, units)
    
          callback({ ...city, ...forecast})
          setMessage('')
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
      setMessage('')
    } catch (error: any) {
      setMessage('Deve preencher uma cidade para pesquisar')
    }
  }
  return (
    <div className='form'>
      <CustomSelect<OptionsInterface> callback={setCity} getOptions={getCities} error={message}></CustomSelect>
      <div className="units" onChange={handleUnitsChange}>
          <input type="radio" defaultChecked value="metric" name="unit" /> °C
          <input type="radio" value="imperial" name="unit" /> °F
      </div>
      {message && <AlertStyled><FontAwesomeIcon icon={faExclamationTriangle}/> {message}</AlertStyled>}
    </div>
  );
}

export default Form;
