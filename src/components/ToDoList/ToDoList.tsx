import React, { useEffect, useState } from 'react';
import ToDoItem from 'components/ToDoItem/ToDoItem';
import GetToDoItems from 'services/getToDoItemsService';

const ToDoList = () => {
  const [toDoList, setToDoList] = useState<
    { id: number; title: string; description: string }[]
  >([]);

  const getToDoItems = async () => {
    const result = await GetToDoItems();
    setToDoList(result);
  };

  useEffect(() => {
    getToDoItems();
  }, []);

  return (
    <>
      {toDoList.map((item) => (
        <ToDoItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default ToDoList;
