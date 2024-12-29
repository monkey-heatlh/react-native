import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import GoBack from "../components/goback";

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState("");

  // 오늘 날짜를 가져오기 (ISO 형식으로)
  const today = new Date().toISOString().split("T")[0];

  return (
    <View style={styles.container}>
      <GoBack />
      <Calendar
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
      {selectedDate ? (
        <Text style={styles.date}>선택된 날짜: {selectedDate}</Text>
      ) : null}
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
