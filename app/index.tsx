import TodoList from "@/components/TodoList";
import { Todo } from "@/types";
import { View } from "react-native";

export default function Index() {
  const mockTodoData: Todo[] = [
    { title: 'FOO BAR', due: '2025-07-03T13:00:00Z', priority: 0 },
    { title: 'Foo Bar', due: '2024-11-03T13:00:00Z', priority: 0 },
    { title: 'foo bar', due: '2025-07-10T13:00:00Z', priority: 2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repellendus earum quidem dignissimos vel odit!' },
    { title: 'Foo', due: '', priority: 1 },
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TodoList data={mockTodoData} />
    </View>
  );
}
