import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.scss';
import App from './App';
import {isInChromeExtension} from './services/LocalStorage';

if (isInChromeExtension()) {
    chrome.storage.local.get(null, function () {
        createRoot(document.getElementById('root')!).render(
            <StrictMode>
                <App/>
            </StrictMode>,
        )
    });
} else {
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <App/>
        </StrictMode>,
    )
}

