import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { isInChromeExtension } from './services/LocalStorage';

declare var chrome: any;

if(isInChromeExtension()) {
  chrome.storage.local.get(null, function(data: any) {
    ReactDOM.render(
      <React.StrictMode>
        <App data={ data }/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  });
} else {
  ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

