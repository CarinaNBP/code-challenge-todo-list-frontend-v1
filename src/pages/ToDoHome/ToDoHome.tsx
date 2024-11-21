import React from 'react';
import ToDoList from 'components/ToDoList/ToDoList';
import AddButton from 'components/AddButton/AddButton';

const ToDoHomePage = () => {
  return (
    <>
      <AddButton />
      <ToDoList />
    </>
  );
};

export default ToDoHomePage;
