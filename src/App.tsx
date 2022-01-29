import React from 'react';
import RequestPage from './pages/RequestPage';
import Theme from './Theme';
import './redux/filter';
function App() {
  return (
    <Theme>
      <div className="App">
        <RequestPage/>
      </div>
    </Theme>
  );
}

export default App;
