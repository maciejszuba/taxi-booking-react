import React from 'react';
import BookingState from './context/booking/BookingState';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import WhereAndWhen from './components/whereandwhen/WhereAndWhen';

import './App.css';


const App = () => {
  return (
    <BookingState>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={WhereAndWhen} />

        </Switch>

      </BrowserRouter>
    </BookingState>

  );
}

export default App;
