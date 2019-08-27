import React from 'react';

import { Provider } from 'react-redux';
import store from '../store';
import Testing from './test';

const App = () => (
  <Provider store={store}>
    <div>
      <hi>Welcome to 1KBIdea</hi>
      <Testing />
    </div>
  </Provider>
);

export default App;
