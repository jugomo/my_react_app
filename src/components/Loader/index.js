import React from 'react';
import loaderSrc from '../../logo.svg';

const Loader = props => (
  <div>
    <img
      style={{ width:100, heigth:100 }}
      alt="loader icon"
      src={loaderSrc}
    />
  </div>
);

export default Loader;
