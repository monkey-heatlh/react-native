import { Image, Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WhiteBtn from "../components/whiteBtn";
import PurpleBtn from "../components/purpleBtn";
import { useNavigation } from "@react-navigation/native";

export default function Main({ route }) {
  const { email } = route.params || {};
  const [data, setData] = useState(null);
  const [dateTime, setDateTime] = useState(new Date());
  const [error, setError] = useState(false);
  const [todayContent, setTodayContent] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const fetchTokenAndData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const response = await axios.get(`${url}/routine/read`, {
            headers: {
              Authorization: token,
            },
          });
          setData(response.data);
          console.log(response.data);
        }
      } catch (err) {
        setError(true);
      }
    };

    fetchTokenAndData();

    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (data) {
      // 월요일부터 금요일까지만 요일 배열과 루틴 키 설정
      const weekDays = ["월", "화", "수", "목", "금"];
      const routineKeys = [
        "mondayContent", // 월요일
        "tuesdayContent", // 화요일
        "wednesdayContent", // 수요일
        "thursdayContent", // 목요일
        "fridayContent", // 금요일
      ];

      const today = new Date().getDay(); // 오늘 요일 (0: 일요일, 1: 월요일, ...)
      if (today >= 1 && today <= 5) {
        // 평일이면 해당 루틴 설정
        const todayContentKey = routineKeys[today - 1];
        const todayRoutine = data[todayContentKey]
          ? `${weekDays[today - 1]}  |  ${data[todayContentKey]}`
          : `${weekDays[today - 1]}  |  오늘은 설정된 루틴이 없습니다.`;
        setTodayContent(todayRoutine);
      } else {
        // 주말이면 기본 메시지
        setTodayContent("주말은 루틴이 없습니다.");
      }
    }
  }, [data]);

  const userName = email ? email.split("@")[0] : "사용자";

  return (
    <View style={style.Container}>
      <View style={style.header}>
        <Image
          style={style.logo}
          resizeMode="contain"
          source={require("../images/textlogo.png")}
        />
        <TouchableOpacity onPress={() => navigation.navigate("calender")}>
          <Image
            resizeMode="contain"
            style={style.icon}
            source={require("../images/calender.png")}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={style.smallTitle}>집에서 편하게</Text>
        <Text style={style.bigTitle}>정확한 자세로!</Text>
      </View>
      <View style={style.miniContainer}>
        <View style={style.textWrap}>
          <Text style={style.without}>안녕하세요,</Text>
          <Text style={style.highlight}>{userName}</Text>
          <Text style={style.without}>님</Text>
        </View>
        <View style={style.line} />
        <View>
          <Text style={style.moment}>
            {dateTime.toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Text>
          <Text style={style.moment}>
            {dateTime.toLocaleTimeString("ko-KR")}
          </Text>
        </View>
      </View>
      {error ? (
        <WhiteBtn
          onPress={() => navigation.navigate("makeRoutine")}
          label={"루틴 설정하기"}
        />
      ) : (
        <TouchableOpacity
          style={style.miniContainer}
          onPress={() => navigation.navigate("makeRoutine")}
        >
          <Text style={style.todayContent}>{todayContent}</Text>
        </TouchableOpacity>
      )}
      <PurpleBtn
        label={"맨몸운동 하러가기"}
        onPress={() => navigation.navigate("exercise")}
        Btnstyle={true}
      />
    </View>
  );
}
