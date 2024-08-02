import React from 'react';
import './App.css';
import BarcodeScanner from './BarcodeScanner';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <BarcodeScanner />
      </header>
    </div>
  );
};

export default App;
