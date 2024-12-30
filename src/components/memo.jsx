import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Memo({ memo }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const tokenFromStorage = await AsyncStorage.getItem("token");
        setToken(tokenFromStorage);
      } catch (err) {
        console.error("토큰 가져오기 실패:", err);
      }
    };
    fetchToken();
  }, []);

  const handleDelete = async () => {
    if (token) {
      try {
        await axios.delete(`${url}/calendar/delete/${memo.date}/${memo.id}`, {
          headers: {
            Authorization: token,
          },
        });
      } catch (err) {
        console.error("삭제 실패:", err);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.memoText}>{memo.content || "불러오기 실패"}</Text>
      <TouchableOpacity onPress={handleDelete}>
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
