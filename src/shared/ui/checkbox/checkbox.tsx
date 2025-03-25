import { CheckCircleOutline, CircleOutlined } from '@mui/icons-material';
import { Checkbox as CheckboxMui, CheckboxProps as CheckboxPropsMui } from '@mui/material';
import React, { FC } from 'react';

import { CheckboxChangeEvent } from '../../types/Todo';

type CheckboxProps = {
  onChange: (e: CheckboxChangeEvent) => void;
  checked: boolean;
  color?: CheckboxPropsMui['color'];
};

export const Checkbox: FC<CheckboxProps> = ({ onChange, color, checked }) => {
  return (
    <CheckboxMui
      color={color ?? 'success'}
      onChange={onChange}
      checked={checked}
      icon={<CircleOutlined />}
      checkedIcon={<CheckCircleOutline />}
    />
  );
};
