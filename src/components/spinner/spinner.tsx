import * as React from 'react';
const Loader = require('halogen/PulseLoader');

export default function Spinner() {
  return (
    <div className="col-12 flex justify-center">
      <Loader color="#AAAAAA" size="16px" margin="4px"/>
    </div>
  );
}
