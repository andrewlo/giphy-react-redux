import * as React from 'react';
const LogoImage = require('../../assets/giphy-large.svg');

const styles = { width: 128 };

export default function Logo() {
  return (
    <div className="flex items-center">
      <img style={ styles }
        src={ LogoImage }
        alt="Giphy React" />
    </div>
  );
}
