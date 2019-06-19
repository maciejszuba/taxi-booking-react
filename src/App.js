import React from 'react';
import BookingState from './context/booking/BookingState';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import BookingDetails from './components/bookingdetails/BookingDetails';

import './css/App.css';


const App = () => {
  return (
    <BookingState>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={BookingDetails} />

        </Switch>

      </BrowserRouter>
    </BookingState>

  );
}

export default App;
