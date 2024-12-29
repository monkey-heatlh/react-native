import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Modal, TextInput } from "react-native";
import { Calendar } from "react-native-calendars";
import GoBack from "../components/goback";
import Memo from "../components/memo";
import WhiteButton from "../components/whiteBtn";
import axios from "axios";
import { url } from "../../config";
import PurpleButton from "../components/purpleBtn";

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState("");
  const [memos, setMemos] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [content, setContent] = useState("");

  // 오늘 날짜를 가져오기 (ISO 형식으로)
  const today = new Date().toISOString().split("T")[0];
  function send() {
    axios.post(`${url}/calender/save/${selectedDate}`, {
      content: content,
    });
  }
  useEffect(() => {
    axios.get(`${url}/calender/${selectedDate}`).then((res) => {
      setMemos(res.data);
    });
  }, [selectedDate]);
  return (
    <View style={styles.container}>
      <GoBack />
      <Calendar
        style={{ marginTop: 20 }}
        theme={{
          arrowColor: "#902BE9", // 화살표 색상
        }}
        onDayPress={(day) => {
          setSelectedDate(day.dateString); // 날짜 선택 시 상태 업데이트
        }}
        markedDates={{
          [selectedDate]: {
            selected: true,
            marked: true,
            selectedColor: "#902BE9", // 선택된 날짜의 배경색
            selectedTextColor: "white", // 선택된 날짜의 텍스트 색상
          },
          [today]: {
            selected: true,
            selectedColor: "#FFF",
            selectedTextColor: "#902BE9", // 오늘 날짜 텍스트 색상
          },
        }}
      />
      <View>
        {memos.map((v) => {
          return <Memo key={v.id} memo={v} />;
        })}
      </View>
      <WhiteButton onPress={() => setIsModalVisible(true)} label={"+"} />
      <Modal visible={isModalVisible} animationType="slide">
        <TextInput placeholder="무슨 메모를 작성하실건가요?" />
        <View>
          <WhiteButton
            onPress={() => setIsModalVisible(false)}
            label={"뒤로"}
          />
          <PurpleButton
            onPress={send}
            label={"저장"}
            Btnstyle={content !== ""}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  date: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center",
    color: "blue",
  },
});
