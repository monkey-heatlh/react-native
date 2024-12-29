import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Calendar } from "react-native-calendars";
import GoBack from "../components/goback";
import Memo from "../components/memo";
import axios from "axios";
import { url } from "../../config";
import WhiteButton from "../components/whiteBtn";

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState("");
  const [memos, setMemos] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [content, setContent] = useState("");

  const today = new Date().toISOString().split("T")[0];

  // 메모 저장 함수
  const send = () => {
    if (selectedDate && content) {
      axios
        .post(`${url}/calender/save/${selectedDate}`, { content })
        .then(() => {
          setContent("");
          setIsModalVisible(false);
          axios.get(`${url}/calender/${selectedDate}`).then((res) => {
            setMemos(res.data);
          });
        })
        .catch((err) => console.error(err));
    }
  };

  // 선택된 날짜의 메모 가져오기
  useEffect(() => {
    if (selectedDate) {
      axios.get(`${url}/calender/${selectedDate}`).then((res) => {
        setMemos(res.data);
      });
    }
  }, [selectedDate]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#fff",
    },
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // 반투명 배경
      padding: 10,
    },
    modalContent: {
      width: "80%",
      padding: 20,
      backgroundColor: "#fff",
      borderRadius: 10,
    },
    title: {
      fontSize: 20,
      marginBottom: 20,
      textAlign: "center",
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
      gap: 10,
    },
    WhiteBtn: {
      paddingHorizontal: "auto",
      paddingVertical: 16,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FFFFFF",
      borderWidth: 1,
      borderColor: "#902BE9",
      width: "50%",
    },
    WhiteBtnLabel: {
      color: "#902BE9",
      fontSize: 16,
    },
    PurpleBtn: {
      backgroundColor: content !== "" ? "#902BE9" : "#690ED4",
      paddingHorizontal: "auto",
      paddingVertical: 16,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      width: "50%",
    },
    PurpleBtnLabel: {
      color: content !== "" ? "#FFFFFF" : "#C5C5C5",
      fontSize: 16,
    },
  });
  return (
    <View style={styles.container}>
      <GoBack />
      <Calendar
        style={{ marginTop: 20 }}
        theme={{
          arrowColor: "#902BE9",
        }}
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: {
            selected: true,
            marked: true,
            selectedColor: "#902BE9",
            selectedTextColor: "white",
          },
          [today]: {
            selected: true,
            selectedColor: "#FFF",
            selectedTextColor: "#902BE9",
          },
        }}
      />
      <View>
        {memos.map((memo) => (
          <Memo key={memo.id} memo={memo} />
        ))}
      </View>
      <WhiteButton onPress={() => setIsModalVisible(true)} label={"+"} />
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>메모 작성</Text>
            <TextInput
              style={styles.input}
              placeholder="무슨 메모를 작성하실건가요?"
              value={content}
              onChangeText={setContent}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.WhiteBtn}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.WhiteBtnLabel}>뒤로</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.PurpleBtn} onPress={send}>
                <Text style={styles.PurpleBtnLabel}>저장</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
