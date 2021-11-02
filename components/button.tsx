import React from 'react';
import { classNames } from '../lib/utils';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children?: any;
  className?: string;
}

export const Button = ({ children, className = '', ...rest }: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(
        'relative inline-flex items-center px-2 py-2 border border-shark-300 text-sm font-medium bg-alabaster-500 hover:bg-shark-50',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export const PageButton = ({ children, className = '', ...rest }: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(
        'relative inline-flex items-center px-2 py-2 border border-shark-300 text-sm font-medium bg-alabaster-500 hover:bg-shark-50',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
