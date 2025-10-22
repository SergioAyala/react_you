import React from 'react';
import ReactDOM from 'react-dom/client';
import{ HelloWorldApp} from '../src/HelloWorldApp';
import{ FirstApp} from '../src/FirstApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp></FirstApp>
    </React.StrictMode>
)
