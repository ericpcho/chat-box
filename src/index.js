import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HandleChatBox from './HandleChatBox';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HandleChatBox />, document.getElementById('root'));
registerServiceWorker();
