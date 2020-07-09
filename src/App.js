import React from 'react'
import Paperbase from './components/Paperbase'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store,persistor} from './redux/store' 
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <Paperbase />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}

export default App
