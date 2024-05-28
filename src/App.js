import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import MasterLayout from './layouts/admin/MasterLayout';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/admin/dashboard' component={MasterLayout}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
