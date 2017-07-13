const connect = require('react-redux').connect;

import * as React from 'react';

import Backdrop from '../backdrop/backdrop';

interface ISideBarProps extends React.Props<any> {
  onClose?: () => void;
  open: boolean;
};

export default function SideBar({
  children = null,
  onClose = null,
  open = false,
}: ISideBarProps) {
  const styles = {
    boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease-in',
    width: '400px',
    transform: open ? 'translateX(0%)' : 'translateX(100%)',
    visibility: open ? 'visible' : 'hidden',
  };

  const closeStyles = {
    cursor: 'pointer',
    padding: 0,
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '20px',
  };

  return (
    <div>
      <div className="fixed z2 top-0 bottom-0 right-0 bg-white" style={ styles }>
        <div className="flex justify-end p1">
          <button style={ closeStyles } className="teal" onClick={ onClose }>
            Close <i className="fa fa-times fa-lg"></i>
          </button>
        </div>
        { children }
      </div>
      <Backdrop show={ open }
        onClick={ onClose } />
    </div>
  );
}
