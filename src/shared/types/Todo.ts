import React from 'react';

export type Todo = {
  id: number;
  label: string;
  checked: boolean;
};

export type CheckboxChangeEvent = React.ChangeEvent<HTMLInputElement>;
