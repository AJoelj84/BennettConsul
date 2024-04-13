import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path = "/" element={Home} exact />
          <Route path = "/" element={Home} exact />
          <Route path = "/" element={Home} exact />
          <Route path = "/" element={Home} exact />
          <Route path = "/" element={Home} exact />
          <Route path = "/" element={Home} exact />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
