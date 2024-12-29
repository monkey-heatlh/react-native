import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Ionicons } from "@expo/vector-icons";
import PurpleBtn from "../components/purpleBtn";
import WhiteBtn from "../components/whiteBtn";

const days = {
  월: "",
  화: "",
  수: "",
  목: "",
  금: "",
};

export default function MakeRoutine() {
  const [selectedValues, setSelectedValues] = useState(days);
  const [currentDay, setCurrentDay] = useState("월");

  const handleValueChange = (value) => {
    if (value) {
      setSelectedValues((prev) => ({
        ...prev,
        [currentDay]: value,
      }));
    }
  };
  const handlePrevDay = () => {
    const prevDayIndex = Object.keys(days).indexOf(currentDay) - 1;
    if (prevDayIndex >= 0) {
      setCurrentDay(Object.keys(days)[prevDayIndex]);
    }
  };
  const handleNextDay = () => {
    const nextDayIndex = Object.keys(days).indexOf(currentDay) + 1;
    if (nextDayIndex < Object.keys(days).length) {
      setCurrentDay(Object.keys(days)[nextDayIndex]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{currentDay}</Text>
      <RNPickerSelect
        onValueChange={handleValueChange}
        items={[
          { label: "가슴", value: "가슴" },
          { label: "등", value: "등" },
          { label: "하체", value: "하체" },
          { label: "복근", value: "복근" },
          { label: "전신", value: "전신" },
        ]}
        placeholder={{
          label: "운동부위 선택",
          value: "",
        }}
        style={{
          inputIOS: styles.input,
          inputAndroid: styles.input,
        }}
        Icon={() => (
          <Ionicons
            name="chevron-down"
            size={20}
            style={styles.icon}
            color="#902BE9"
          />
        )}
      />
      <WhiteBtn label="뒤로" onPress={handlePrevDay} />
      <PurpleBtn
        label={currentDay === "금" ? "확인" : "다음"}
        onPress={handleNextDay}
        Btnstyle={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
    gap: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#777",
    padding: 10,
    borderRadius: 5,
    paddingRight: 30,
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});
