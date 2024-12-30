import { StyleSheet, Text, View } from "react-native";

export default function Memo({ memo }) {
  return (
    <View style={styles.container}>
      <Text style={styles.memoText}>{memo.content || "불러오기 실패"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#D8d8d8",
    paddingVertical: 24,
    height: "auto",
    width: "100%",
  },
  memoText: {
    fontSize: 16,
    color: "black",
    flexShrink: 1,
  },
});
