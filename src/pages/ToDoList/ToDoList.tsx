import React from 'react';
import { ToDoItem } from 'src/components/ToDoItem';
import { AddButton } from 'src/components/AddButton';

const ToDoListPage = () => {
  return (
    <>
      <AddButton />
      <ToDoItem></ToDoItem>
    </>
  );
};

export default ToDoListPage;
