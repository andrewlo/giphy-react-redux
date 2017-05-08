import * as React from 'react';

interface IFieldDefinition {
  value?: string;
  onBlur?: () => void;
  onChange?: () => void;
  onFocus?: () => void;
}

interface IInputProps extends React.Props<any> {
  fieldDefinition?: IFieldDefinition;
  type?: string;
  placeholder?: string;
  id?: string;
  inputClasses?: string;
};

export default function Input({
  type = 'text',
  placeholder = '',
  fieldDefinition = {} as IFieldDefinition,
  id = '',
  inputClasses = ''
}) {
  const {
    value,
    onBlur,
    onChange,
    onFocus
  } = fieldDefinition;

  const classes = `block col-12 mb1 input ${inputClasses}`;

  return (
    <input
      id={ id }
      className={ classes }
      type={ type }
      placeholder={ placeholder }
      value={ value }
      onBlur={ onBlur }
      onChange={ onChange }
      onFocus={ onFocus } />
  );
}
