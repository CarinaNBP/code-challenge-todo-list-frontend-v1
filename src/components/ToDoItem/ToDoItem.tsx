import React from 'react';
import { ToDoItemProps } from 'types/ToDoItemProps';

const ToDoItem = ({ item }: ToDoItemProps) => {
  return (
    <>
      {item.title}
      {item.description}
    </>
  );
};

export default ToDoItem;
