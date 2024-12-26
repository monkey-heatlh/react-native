import { StyleSheet, Text, TextInput, View } from "react-native";
import { style } from "./style";
import { useState } from "react";
import WhiteBtn from "../components/whiteBtn";
import DisBtn from "../components/disBtn";
import axios from "axios";
import { url } from "../../config";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const [active, setActive] = useState(false);
  const [email, setEmail] = useState("");
  const [focus, setFocus] = useState(false);

  const navigation = useNavigation();
  const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  function sendCertification() {
    if (!emailRegex.test(email)) {
      setActive(false);
      return;
    }
    axios
      .post(`${url}/send-code`, {
        email: email,
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <View style={style.Container}>
      <Text style={style.title}>안녕하세요! {"\n"}이메일로 가입해주세요.</Text>
      <Text>이메일을 입력하여 함께 운동을 해보아요!!</Text>
      <TextInput
        style={{
          ...styles.input,
          borderColor: focus ? "#902BE9" : "#A6A6A6",
        }}
        placeholder="이메일을 입력해주세요"
        value={email}
        onChangeText={setEmail}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {active ? (
        <WhiteBtn label={"인증번호 전송"} onPress={sendCertification} />
      ) : (
        <DisBtn label={"인증번호 전송"} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
  },
});
