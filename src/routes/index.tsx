import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ToDoCreatePage from 'pages/ToDoCreate/ToDoCreate';
import ToDoListPage from 'pages/ToDoList/ToDoList';

const RoutesIndex = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDoListPage />} />
        <Route path="/create" element={<ToDoCreatePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesIndex;
