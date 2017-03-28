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
    transition: 'all 0.5s ease-in',
    width: open ? '400px' : '0',
  };

  return (
    <div>
      <div className="fixed z2 top-0 bottom-0 right-0 bg-white" style={styles}>
        { children }
      </div>
      <Backdrop show={ open }
        onClick={ onClose } />
    </div>
  );
}
