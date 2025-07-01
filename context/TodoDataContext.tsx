import { Todo } from '@/types';
import { createContext, FC, ReactNode, useContext, useState } from 'react';
import uuid from 'react-native-uuid';

type TodoContextValue = {
  todoData: Todo[]
  addTodo: (newTodoData: Omit<Todo, 'id'>) => void
  editTodo: (editedTodoData: Todo) => void
  deleteTodo: (id: string) => void
};

function newTodoId() {
  return `local-${uuid.v4()}`
}

const TodoDataContext = createContext({} as TodoContextValue);

export const TodoDataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [todoData, setTodoData] = useState<Todo[]>([]);

  const addTodo: TodoContextValue['addTodo'] = (newTodoData) => {
    setTodoData((prevState) => [...prevState, { ...newTodoData, id: newTodoId() }]);
  }

  const editTodo: TodoContextValue['editTodo'] = (editedTodoData) => {
    setTodoData((prevState) => prevState.map((todo) => {
      if (todo.id === editedTodoData.id) {
        return editedTodoData;
      } else {
        return todo;
      }
    }));
  }

  const deleteTodo: TodoContextValue['deleteTodo'] = (id) => {
    setTodoData((prevState) => prevState.filter((todo) => todo.id !== id));
  }

  return (
    <TodoDataContext.Provider value={{
      todoData,
      addTodo,
      editTodo,
      deleteTodo,
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
