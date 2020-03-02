import React from 'react';
import MyRouter from './router/router.js';
import {Provider} from 'react-redux';
import store from './store/store.js';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        
        <MyRouter />    
      </Provider>
    </div>
  );
}

export default App;
