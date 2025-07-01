import { Todo } from "@/types";
import { ListRenderItem, StyleSheet, Text, View } from "react-native";

const priorityTextMap = {
  0: '.',
  1: '!',
  2: '!!',
};

const styles = StyleSheet.create({
  wrapper: {
    boxShadow: '0px 4px 4px 4px rgba(0, 0, 0, 0.2)',
    width: '100%',
    padding: 8,
    borderRadius: 16
  },
  title: {
    fontSize: 20,
    fontWeight: "700"
  },
  dueText: {
    padding: 4,
    borderRadius: 8,
    textAlign: 'center',
  },
  dueSoon: {
    backgroundColor: 'rgb(255, 226, 61)',
  },
  duePast: {
    backgroundColor: 'rgb(255, 110, 110)',
  },
});

function getRelativeDueStyle(dueDate?: Date) {
  if (!dueDate) return;

  const oneWeekInMiliseconds = 1000 * 60 * 60 * 24 * 7;
  const dueAndNowDelta = dueDate.getTime() - Date.now();

  if (dueAndNowDelta < 0) return styles.duePast;
  if (dueAndNowDelta < oneWeekInMiliseconds) return styles.dueSoon;
}

const TodoItem: ListRenderItem<Todo> = ({ item }) => {
  const dueDate = item.due && new Date(item.due) || undefined;

  const dueTextRelativeStyle = getRelativeDueStyle(dueDate);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>
        {priorityTextMap[item.priority]} - {item.title}
      </Text>

      {dueDate && (
        <Text style={[styles.dueText, dueTextRelativeStyle]}>
          {dueDate.toLocaleString('pt-BR')}
        </Text>
      )}

      {item.description && (
        <Text>
          {item.description}
        </Text>
      )}
    </View>
  );
}

export default TodoItem;
