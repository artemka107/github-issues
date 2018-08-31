import React from 'react';
import Header from './components/Header.jsx';
import Issues from './containers/Issues';
import './App.css';

const App = () => (
  <div>
    <Header />
    <main className="content">
      <Issues />
    </main>
  </div>
);

export default App;
