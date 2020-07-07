import React from 'react'
import Paperbase from './components/Paperbase'
import {BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Paperbase />
    </BrowserRouter>
  )
}

export default App
