import { useTodoData } from "@/context/TodoDataContext";
import { FlatList, StyleSheet, Text } from "react-native";
import TodoItem from "./TodoItem";

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    padding: 10,
  },
  contentContainer: {
    gap: 16,
  }
});

const TodoList: React.FC = () => {
  const { todoData } = useTodoData();

  return (
    <>
      {!todoData.length ? (
        <Text>Your todo list is empty.</Text>
      ):(
        <FlatList
          data={todoData}
          renderItem={TodoItem}
          style={styles.wrapper}
          contentContainerStyle={styles.contentContainer}
        />
      )}
    </>
  );
}

export default TodoList;
