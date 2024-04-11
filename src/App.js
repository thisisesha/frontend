import './App.css';

import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Signin from '../src/users/Signin.tsx';
import Dashboard from '../src/users/Dashboard.tsx';

function App() {
  return (
    <div className='App'>
      {/* Setting up the Router component from react-router-dom */}
      <Router>
        {/* Defining different Routes using Routes and Route components */}
        <Routes>
          {/* Route for the Dashboard component */}
          <Route exact path='/' element={<Dashboard/>} />
          {/* Route for the Login component */}
          <Route exact path="/signin" element={<Signin/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;