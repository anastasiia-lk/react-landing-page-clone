import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global, css } from '@emotion/core';

// import img from './images/background.jpg';

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        /* Use better layout model (border-box) */
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          font-size: 10px;
          font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, AvenirLTPro, 'Open Sans',
            'Helvetica Neue', sans-serif;
          margin: 0;
          padding: 0;
        }
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
