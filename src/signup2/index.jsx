import { StyleSheet, Text, TextInput, View } from "react-native";
import { style } from "./style";
import PurpleBTn from "../components/purpleBtn";
import { useState } from "react";
import axios from "axios";
import { url } from "../../config";
import { useNavigation } from "@react-navigation/native";

export default function SignUp2({ route }) {
  const { email } = route.params;
  const navigation = useNavigation();
  function signUp() {
    if (error) return;
    axios
      .post(`${url}/auth/signup`, {
        email: email,
        password: password,
      })
      .then((res) => {
        navigation.navigate("login");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  return (
    <View style={style.Container}>
      <Text style={style.title}>비밀번호를 설정해주세요.</Text>
      <Text>비밀번호를 설정하여 나만의 계정을 보호하세요!</Text>
      <View style={style.inputWrap}>
        <Text style={style.label}>비밀번호</Text>
        <TextInput
          secureTextEntry={true}
          onChangeText={(text) => {
            setPassword(text);
            setError(false);
          }}
          placeholder="비밀번호를 입력해주세요"
          style={styles.input}
        />
      </View>
      <View style={style.inputWrap}>
        <Text style={style.label}>비밀번호 확인</Text>
        <TextInput
          secureTextEntry={true}
          onChangeText={(text) => {
            setPasswordCheck(text);
            setError(password !== text);
          }}
          placeholder="비밀번호를 재입력해주세요"
          style={{
            ...styles.input,
            borderColor: error ? "#FF0000" : "#A6A6A6",
          }}
        />
      </View>
      <PurpleBTn label="확인" onPress={signUp} Btnstyle={!error} />
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
