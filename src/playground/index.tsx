import React from 'react';
import ReactDOM from 'react-dom';
import { TextExplode } from '../TextExplode';
ReactDOM.render(
  <React.Fragment>
      <TextExplode text="111111111111111111111111" trigger="click" />,
      <TextExplode text="222222222222222222222222" trigger="click" />
  </React.Fragment>
  ,
  document.getElementById('root'),
);
