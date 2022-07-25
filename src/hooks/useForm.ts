import { useState } from 'react';

interface ITarget {
  target: {
    name: string;
    value: any;
  };
}

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target: { name, value } }: ITarget) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
