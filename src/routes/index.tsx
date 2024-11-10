import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import ToDoCreatePage from 'pages/ToDoCreate/ToDoCreate';
import ToDoListPage from 'pages/ToDoList/ToDoList';

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={ToDoListPage} />
        <Route exact path="/create" component={ToDoCreatePage} />
      </BrowserRouter>
    </>
  );
};

export default Routes;
