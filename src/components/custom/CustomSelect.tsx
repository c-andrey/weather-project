import { useState } from 'react';
import AsyncSelect from 'react-select/async'
import styled from 'styled-components';
import OptionsInterface from '../../types/OptionsInterface';
import getCities from '../../services/getCities';

const StyledAsyncSelect = styled(AsyncSelect)`
  display: block;
  height: 34px;
  font-size: 14px;
  color: #ccc;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
`

export interface ICustomSelectProps {
  callback: (city: OptionsInterface) => void
}


const CustomSelect = ({callback}: ICustomSelectProps) => {
const [query, setQuery] = useState("");

const handleInput = (cityName: string): Promise<OptionsInterface[]> => {
  try {
      if (!cityName) {
        throw new Error('Digite o nome de um local.')
      }
      const result = getCities(cityName)

      return result

  } catch (error) {
    throw error
  }
}

const loadOptions = (inputValue: string) =>
  new Promise<OptionsInterface[]>((resolve) => {
    if (inputValue.length > 3) {
      setTimeout(() => {
        resolve(handleInput(inputValue));
      }, 1000);
    }
  });

  return (
      <StyledAsyncSelect loadOptions={loadOptions}
      cacheOptions={true}
      onInputChange={(value) => setQuery(value)}
      onChange={(value) => callback(value as OptionsInterface)}/>
  );
}

export default CustomSelect;
