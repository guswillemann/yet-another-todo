import { Todo } from '@/types';
import { createContext, FC, ReactNode, useContext, useState } from 'react';

type TodoContextValue = {
  todoData: Todo[]
};

const TodoDataContext = createContext({} as TodoContextValue);

export const TodoDataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [todoData, setTodoData] = useState<Todo[]>([]);
  
  return (
    <TodoDataContext.Provider value={{
      todoData
    }}>
      {children}
    </TodoDataContext.Provider>
  );
}

export const useTodoData = () => {
  const todoData = useContext(TodoDataContext);
  if (!todoData) {
    throw Error('useTodoData has to be used inside a TodoDataContext');
  }

  return todoData;
}
