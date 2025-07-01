import { Todo } from "@/types";
import { FlatList, StyleSheet } from "react-native";
import TodoItem from "./TodoItem";

type TodoListProps = {
  data: Todo[]
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    padding: 10,
  },
  contentContainer: {
    gap: 16,
  }
});

const TodoList: React.FC<TodoListProps> = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={TodoItem}
      style={styles.wrapper}
      contentContainerStyle={styles.contentContainer}
    />
  );
}

export default TodoList;
