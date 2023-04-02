import { Component } from 'react';
import { IUser } from '../../../models/user-model';

export const validateName = (value: string | undefined, context: Component<object, FormData>) => {
  let error = '';

  if (!value) {
    error = 'Required field';
  } else if (value.length < 2) {
    error = 'Must contain minimum 2 characters';
  } else if (value[0] !== value[0].toUpperCase()) {
    error = 'First letter must be capitalized';
  }

  context.setState((prevState) => ({
    ...prevState,
    validation: {
      ...prevState,
      name: error,
    },
  }));

  return !!error;
};

export const validateRequired = (
  value: Date | string | boolean | false | null | undefined,
  prop: string,
  context: Component<object, FormData>
) => {
  let error = '';

  if (!value) {
    error = 'Required field';
  }

  context.setState((prevState) => ({
    ...prevState,
    validation: {
      ...prevState,
      [prop]: error,
    },
  }));

  return !!error;
};

export const validateFile = (value: File | null, context: Component<object, IUser>) => {
  let error = '';

  if (!value) {
    error = 'Required field';
  } else if (!value?.type.includes('image')) {
    error = 'Please upload an image.';
  }

  context.setState((prevState) => ({
    ...prevState,
    validation: {
      ...prevState,
      file: error,
    },
  }));

  return !!error;
};
