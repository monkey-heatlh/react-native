import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Ionicons } from "@expo/vector-icons";
import PurpleBtn from "../components/purpleBtn";
import WhiteBtn from "../components/whiteBtn";
import axios from "axios";
import { url } from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GoBack from "../components/goback";
import { useNavigation } from "@react-navigation/native";

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
  const [accessToken, setAccessToken] = useState(null);

  const navigation = useNavigation();
  useEffect(() => {
    const fetchToken = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        setAccessToken(token);
      }
    };
    fetchToken();
  }, []);

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
    } else {
      send();
    }
  };

  const send = async () => {
    try {
      if (accessToken) {
        await axios.post(
          `${url}/routine/save`,
          {
            monday_content: selectedValues.월,
            tuesday_content: selectedValues.화,
            wednesday_content: selectedValues.수,
            thursday_content: selectedValues.목,
            friday_content: selectedValues.금,
          },
          {
            headers: {
              Authorization: accessToken,
            },
          }
        );
        console.log("데이터 저장 완료");
        navigation.navigate("main");
      }
    } catch (error) {
      console.error("전송 오류:", error);
    }
  };

  return (
    <View style={styles.container}>
      <GoBack />
      <Text style={styles.label}>{currentDay + "요일"}</Text>
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
      <View style={styles.buttonWrapper}>
        <WhiteBtn label="뒤로" onPress={handlePrevDay} />
        <PurpleBtn
          label={currentDay === "금" ? "확인" : "다음"}
          onPress={currentDay === "금" ? send : handleNextDay}
          Btnstyle={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    padding: 20,
    alignItems: "center",
    gap: 150,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 28,
    marginVertical: 10,
    fontWeight: 600,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#777",
    padding: 20,
    borderRadius: 5,
    paddingRight: 30,
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 20,
  },
  buttonWrapper: {
    width: "100%",
    gap: 10,
  },
});
