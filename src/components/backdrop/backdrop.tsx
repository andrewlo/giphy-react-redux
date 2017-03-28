import * as React from 'react';

let styles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,.3)',
  zIndex: 1,
  transition: 'opacity .2s ease-in-out',
};

interface IBackdropProps extends React.Props<any> {
  onClick?: () => void;
  show: boolean;
};
export default function Backdrop({
  onClick = null,
  show = false,
}: IBackdropProps) {

  const visibleStyles = {
    opacity: show ? 1 : 0,
    visibility: show ? 'visible' : 'hidden'
  };

  const currentStyles = Object.assign({}, styles, visibleStyles);

  return (
    <div style={ currentStyles }
      onClick={ onClick }>
    </div>
  );
}
