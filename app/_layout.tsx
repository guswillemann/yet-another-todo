import { TodoDataProvider } from "@/context/TodoDataContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <TodoDataProvider>
      <Stack />
    </TodoDataProvider>
  );
}
