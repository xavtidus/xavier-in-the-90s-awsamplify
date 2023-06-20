import React from 'react';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import HitCounter from './components/HitCounter';

function App() {
  return (
    <div className="App">
            <HitCounter />
        </div>
  );
}

export default App;
