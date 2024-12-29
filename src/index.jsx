import { Image, StyleSheet, View } from "react-native";
import PurpleBtn from "./components/purpleBtn";
import { useNavigation } from "@react-navigation/native";
import WhiteBtn from "./components/whiteBtn";

export default function Start() {
  const navigation = useNavigation();
  return (
    <View style={styles.Wrapper}>
      <Image
        style={styles.Logo}
        resizeMode="contain"
        source={require("./images/textlogo.png")}
      />
      <View style={styles.BtnWrapper}>
        <WhiteBtn
          label="회원가입"
          onPress={() => navigation.navigate("signup")}
        />
        <PurpleBtn
          label="로그인"
          onPress={() => navigation.navigate("login")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  Logo: {
    width: 260,
    height: 42,
    flex: 0.8,
  },
  BtnWrapper: {
    flexDirection: "column",
    gap: 12,
    width: "100%",
  },
});
