import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { DndContext, rectIntersection } from '@dnd-kit/core';
import { todoData, onProgressData, completedData } from '../../constants/mockData';
import Lanes from '../Lanes';

const Tasks = () => {
  const [todoItems, setTodoItems] = useState<any[]>(todoData);
  const [doneItems, setDoneItems] = useState<any[]>(completedData);
  const [inProgressItems, setInProgressItems] = useState<any[]>(onProgressData);

  return (
    <DndContext
      collisionDetection={rectIntersection}
      onDragEnd={(e) => {
        const container = e.over?.id;
        const data = e.active.data.current?.data ?? null;
        const index = e.active.data.current?.index ?? 0;
        const parent = e.active.data.current?.parent ?? 'todo';
        if (container && container !== parent) {
          if (container === 'todo') {
            setTodoItems([...todoItems, data]);
          } else if (container === 'done') {
            setDoneItems([...doneItems, data]);
          } else {
            setInProgressItems([...inProgressItems, data]);
          }
          if (parent === 'todo') {
            setTodoItems([...todoItems.slice(0, index), ...todoItems.slice(index + 1)]);
          } else if (parent === 'done') {
            setDoneItems([...doneItems.slice(0, index), ...doneItems.slice(index + 1)]);
          } else {
            setInProgressItems([
              ...inProgressItems.slice(0, index),
              ...inProgressItems.slice(index + 1)
            ]);
          }
        }
      }}
    >
      <Flex gap="15px" px="48.5px" justifyContent="center">
        <Lanes title="todo" items={todoItems} />
        <Lanes title="inprogress" items={inProgressItems} />
        <Lanes title="done" items={doneItems} />
      </Flex>
    </DndContext>
  );
};

export default Tasks;
