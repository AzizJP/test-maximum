import { FC, memo } from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({ variant = 'card', type = 'button', className, onClick, children, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles[`${variant}`]} ${className ? className : ''}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default memo(Button);
