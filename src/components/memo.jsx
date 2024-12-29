import { StyleSheet, Text, View } from "react-native";

export default function Memo() {
  return (
    <View style={styles.container}>
      <Text>오늘 상체를 해야하는데 제대로 못했어!@@@@@@@@@@@@@@@</Text>
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
