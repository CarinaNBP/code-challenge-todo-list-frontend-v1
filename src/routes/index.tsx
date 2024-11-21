import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ToDoCreatePage from 'pages/ToDoCreate/ToDoCreate';
import ToDoHomePage from 'pages/ToDoHome/ToDoHome';

const RoutesIndex = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDoHomePage />} />
        <Route path="/create" element={<ToDoCreatePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesIndex;
