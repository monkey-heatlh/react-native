import { StyleSheet, Text, View } from "react-native";

export default function Memo(memo) {
  return (
    <View style={styles.container}>
      <Text>{memo.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#D8d8d8",
    paddingVertical: 24,
  },
});
