import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../containers/Home';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path = '/' element={<Home />} />
    </Routes>
  </BrowserRouter>
)

export default App