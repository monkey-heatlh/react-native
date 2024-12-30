import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Memo({ memo }) {
  const [token, setToken] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.memoText}>{memo.content || "불러오기 실패"}</Text>
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <Image source={require("../images/delete.png")} style={styles.icon} />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>정말 삭제하시겠습니까?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={handleDelete}
              >
                <Text style={styles.deleteButtonText}>삭제</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  // 모달 스타일
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  cancelButton: {
    padding: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
    width: "40%",
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#fff",
  },
  deleteButton: {
    padding: 10,
    backgroundColor: "#ff0000",
    borderRadius: 5,
    width: "40%",
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#fff",
  },
});
