import React from 'react';
import RoutesIndex from 'routes/index';

function App() {
  return (
    <div className="App">
      <RoutesIndex />
      <h1>Hello Code Challenge!</h1>
      {process.env.REACT_APP_BASE_URL}
    </div>
  );
}

export default App;
