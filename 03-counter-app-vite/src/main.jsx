import React from 'react';
import ReactDOM from 'react-dom/client';
import{ HelloWorldApp} from '../src/HelloWorldApp';
import{ FirstApp} from '../src/FirstApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title='hola' subTitle='123'></FirstApp>
    </React.StrictMode>
)
