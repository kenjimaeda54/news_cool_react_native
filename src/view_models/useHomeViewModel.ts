import {useState} from 'react';
import { Platform } from 'react-native';

interface IUseHomeViewModel {
  inputHeight: number;
  handleHeightInput: (height: number) => void;
  valueInput: string;
  setValueInput: (value: string) => void;
  returnPaddingIfPlataformIos: () => number
}

export default function useHomeViewModel(): IUseHomeViewModel {
  const [inputHeight, setInputHeight] = useState(20);
  const [valueInput, setValueInput] = useState('');

  const handleHeightInput = (height: number) => setInputHeight(height);

  const returnPaddingIfPlataformIos = () =>  Platform.OS === 'android' ? 0 : 5

  return {
    inputHeight,
    handleHeightInput,
    valueInput,
    setValueInput,
    returnPaddingIfPlataformIos,
  };
}
