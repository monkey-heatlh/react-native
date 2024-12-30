import axios from "axios";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { url } from "../../config";

export default function Memo({ token, memo }) {
  return (
    <View style={styles.container}>
      <Text style={styles.memoText}>{memo.content || "불러오기 실패"}</Text>
      <TouchableOpacity
        onPress={() => {
          axios
            .delete(`${url}/calendar/${memo.date}/${memo.id}`, {
              headers: {
                Authorization: token,
              },
            })
            .catch((err) => console.error(err));
        }}
      >
        <Image source={require("../images/delete.png")} style={styles.icon} />
      </TouchableOpacity>
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
    justifyContent: "space-between",
    flexDirection: "row",
  },
  memoText: {
    fontSize: 16,
    color: "black",
    flexShrink: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
