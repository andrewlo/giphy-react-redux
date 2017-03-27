const connect = require('react-redux').connect;

import * as React from 'react';

interface ISideBarProps extends React.Props<any> {
  open: boolean;
};

export default function SideBar({
  children = null,
  open = false,
}: ISideBarProps) {
  const styles = {
    boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.2)',
    transition: 'all 0.5s ease-in',
    width: open ? '300px' : '0',
  };

  return (
    <div className="fixed z1 top-0 bottom-0 right-0 bg-white" style={styles}>
      { children }
    </div>
  );
}
