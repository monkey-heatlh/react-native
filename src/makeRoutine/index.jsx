import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Ionicons } from "@expo/vector-icons";

const days = {
  월: "",
  화: "",
  수: "",
  목: "",
  금: "",
  토: "",
  일: "",
};

export default function MakeRoutine() {
  const [selectedValue, setSelectedValue] = useState(days);

  return (
    <View style={styles.container}>
      <Text></Text>
      <RNPickerSelect
        onValueChange={(value) => {
          if (value) {
            setSelectedValue(value);
          }
        }}
        items={[
          { label: "운동 루틴", value: "exercise" },
          { label: "공부 루틴", value: "study" },
          { label: "취미 루틴", value: "hobby" },
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#777",
    padding: 10,
    borderRadius: 5,
    paddingRight: 30, // 아이콘 공간 확보
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});
