import { StyleSheet, Text, TextInput, View } from "react-native";
import { style } from "./style";
import PurpleBtn from "../components/purpleBtn";
import { useState } from "react";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  function Login() {}
  return (
    <View style={style.Container}>
      <Text style={style.title}>로그인</Text>
      <View style={style.inputContainer}>
        <View style={style.inputWrap}>
          <Text style={style.label}>이메일</Text>
          <TextInput
            onChangeText={(text) => {
              setEmail(text);
              emailRegex.test(text)
                ? setEmailError(false)
                : setEmailError(true);
            }}
            style={styles.input}
            placeholder="이메일을 입력해주세요"
          />
          {emailError && (
            <Text style={style.errorMessage}>잘못된 이메일 형식입니다.</Text>
          )}
        </View>
        <View style={style.inputWrap}>
          <Text style={style.label}>비밀번호</Text>
          <TextInput
            style={styles.input}
            placeholder="비밀번호를 입력해주세요"
          />
          {passwordError && (
            <Text style={style.errorMessage}>
              비밀번호가 일치하지 않습니다.
            </Text>
          )}
        </View>
      </View>
      <PurpleBtn
        label={"로그인"}
        onPress={Login}
        Btnstyle={emailError || passwordError}
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
