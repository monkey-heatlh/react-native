import { Text, View } from "react-native";
import { style } from "./style";
import Select from "../components/select";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import PurpleBtn from "../components/purpleBtn";
import GoBack from "../components/goback";

export default function Exercise() {
  const [value, setValue] = useState("");
  const navigation = useNavigation();
  return (
    <View style={style.Container}>
      <GoBack />
      <View style={style.titleWrap}>
        <Text style={style.title}>무슨 운동을 배워볼까요?</Text>
        <Text style={style.subTitle}>(눌러서 선택)</Text>
      </View>
      <View style={style.selectWrap}>
        <Select
          label="가슴"
          onPress={() => setValue("가슴")}
          Btnstyle={value === "가슴"}
        />
        <Select
          label="복근"
          onPress={() => setValue("복근")}
          Btnstyle={value === "복근"}
        />
        <Select
          label="등"
          onPress={() => setValue("등")}
          Btnstyle={value === "등"}
        />
        <Select
          label="하체"
          onPress={() => setValue("하체")}
          Btnstyle={value === "하체"}
        />
        <Select
          label="전신"
          onPress={() => setValue("전신")}
          Btnstyle={value === "전신"}
        />
      </View>
      <PurpleBtn
        label={"다음"}
        Btnstyle={value !== ""}
        onPress={() => navigation.navigate("detail", { exercise: value })}
      />
    </View>
  );
}
