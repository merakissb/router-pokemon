import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
