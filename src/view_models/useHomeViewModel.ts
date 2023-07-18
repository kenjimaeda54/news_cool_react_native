import {useState} from 'react';

interface IUseHomeViewModel {
  inputHeight: number;
  handleHeightInput: (height: number) => void;
  valueInput: string;
  setValueInput: (value: string) => void;
}

export default function useHomeViewModel(): IUseHomeViewModel {
  const [inputHeight, setInputHeight] = useState(20);
  const [valueInput, setValueInput] = useState('');

  const handleHeightInput = (height: number) => setInputHeight(height);

  return {
    inputHeight,
    handleHeightInput,
    valueInput,
    setValueInput,
  };
}
