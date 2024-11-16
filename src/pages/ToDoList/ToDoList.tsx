import React, { useEffect, useState } from 'react';
import ToDoItem from 'components/ToDoItem/ToDoItem';
import AddButton from 'components/AddButton/AddButton';
import GetToDoItems from 'services/getToDoItemsService';
// consumir da api /todos e fazer um map passando cada item pro ToDoItem

// acho que o ideal é ter um componente de todo list, e ficar la a obrigação de listar
const ToDoListPage = () => {
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
      <AddButton />
      {toDoList.map((item) => (
        <ToDoItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default ToDoListPage;
