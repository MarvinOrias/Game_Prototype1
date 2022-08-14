import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';

import HomePage from './pages/HomePage';
import Error404Page from './pages/Error404Page';

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Error404Page />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
