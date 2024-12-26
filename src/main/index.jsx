import { Image, Text, View } from "react-native";
import { style } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Main() {
  const [userName, setUserName] = useState("");
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const fetchTokenAndData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const parsedToken = JSON.parse(token); // 저장된 토큰이 JSON 문자열이라면 파싱 필요
          const response = await axios.get(`${url}/read`, {
            headers: {
              Authorization: parsedToken.accessToken, // accessToken 사용
            },
          });
          console.log(response.data);

          // 사용자의 이름 등 데이터를 여기서 설정할 수 있습니다.
          setUserName(response.data.userName || "사용자");
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchTokenAndData();

    // 현재 시간을 설정 (실시간 갱신 가능)
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  return (
    <View style={style.Container}>
      <View style={style.header}>
        <Image
          style={style.logo}
          resizeMode="contain"
          source={require("../images/textlogo.png")}
        />
        <Image
          resizeMode="contain"
          style={style.icon}
          source={require("../images/setting.png")}
        />
      </View>
      <Text style={style.smallTitle}>집에서 편하게</Text>
      <Text style={style.bigTitle}>정확한 자세로!</Text>
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
    </View>
  );
}
