import React from 'react';
import ReactDOM from 'react-dom';
import HandleChatBox from './HandleChatBox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HandleChatBox />, div);
});
