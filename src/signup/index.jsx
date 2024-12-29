import { StyleSheet, Text, TextInput, View } from "react-native";
import { style } from "./style";
import { useState } from "react";
import WhiteBtn from "../components/whiteBtn";
import DisBtn from "../components/disBtn";
import axios from "axios";
import { url } from "../../config";
import { useNavigation } from "@react-navigation/native";
import PurpleBtn from "../components/purpleBtn";

export default function SignUp() {
  const [active, setActive] = useState(false);
  const [email, setEmail] = useState("");
  const [next, setNext] = useState(false);
  const [certification, setCertification] = useState("");
  const [Btnstyle, setStyle] = useState(false);

  const navigation = useNavigation();
  const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  function sendCertification() {
    if (!emailRegex.test(email)) {
      setActive(false);
      return;
    }
    axios
      .post(
        `${url}/auth/send-code`,
        {
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.message);
        setNext(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function check() {
    axios
      .post(`${url}/auth/verify-code`, {
        email: email,
        code: certification,
      })
      .then((res) => {
        navigation.navigate("signup2", { email: email });
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
        style={styles.input}
        placeholder="이메일을 입력해주세요"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setActive(emailRegex.test(text));
        }}
      />
      {active ? (
        <WhiteBtn label={"인증번호 전송"} onPress={sendCertification} />
      ) : (
        <DisBtn label={"인증번호 전송"} />
      )}
      <View>
        {next && (
          <TextInput
            onChangeText={(e) => {
              setCertification(e);
              setStyle(true);
            }}
            placeholder="인증번호 입력"
            style={styles.input}
          />
        )}
        {next && <Text style={style.warn}>타인에게 공유하면 위험해요!!</Text>}
      </View>
      <PurpleBtn
        Btnstyle={Btnstyle}
        label={"동의하고 시작하기"}
        onPress={check}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    borderColor: "#A6A6A6",
  },
});
