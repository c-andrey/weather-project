import { useState } from 'react';
import AsyncSelect from 'react-select/async'
import styled from 'styled-components';

const StyledAsyncSelect = styled(AsyncSelect)`
  display: block;
  height: 34px;
  font-size: 14px;
  color: #000;
  background-color: #fff;
  width: 50%;

  @media(max-width: 600px) {
    height: 25px;
    font-size: 10px;
  }
`

export interface ICustomSelectProps<T> {
  callback: (city: T) => void,
  getOptions: (inputValue: string) => Promise<T[]>,
  error:string
}


const CustomSelect = <T extends unknown>({callback, getOptions}: ICustomSelectProps<T>) => {
const [query, setQuery] = useState("");

const handleInput = async (inputValue: string): Promise<T[]> => {
  try {
      const result = await getOptions(inputValue)

      return result
  } catch (error) {
    throw error
  }
}

const loadOptions = (inputValue: string) =>
  new Promise<T[]>((resolve) => {
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
      onChange={(value) => callback(value as T)}/>
      
  );
}

export default CustomSelect;
