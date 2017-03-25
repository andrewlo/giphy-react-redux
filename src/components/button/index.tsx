import * as React from 'react';
import * as classNames from 'classnames';

interface IButtonProps extends React.Props<any> {
  onClick?: () => void;
  type?: string;
  className?: string;
  id?: string;
  testid?: string;
  isLoading?: boolean;
};

export default function Button({
  onClick = null,
  type = 'button',
  className = '',
  id = '',
  testid = '',
  children = null,
  isLoading = false
}: IButtonProps) {
  const buttonClasses = classNames('btn', 'btn-primary', className);

  return (
    <button
      data-testid={ testid }
      id={ id }
      type={ type }
      className={ buttonClasses }
      disabled={ isLoading }
      onClick={ onClick }>
      { children }
    </button>
  );
}
