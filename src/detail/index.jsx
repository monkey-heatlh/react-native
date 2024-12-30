import { Image, Text, View } from "react-native";
import GoBack from "../components/goback";
import { style } from "./style";
import PurpleBtn from "../components/purpleBtn";
import { useNavigation } from "@react-navigation/native";

export default function Detail({ route }) {
  const { exercise } = route.params;
  const navigation = useNavigation();
  const Bool = exercise === "가슴";
  return (
    <View style={style.Container}>
      <GoBack />
      <Text style={style.title}>{Bool ? "PUSH UP" : "FLANK"}</Text>
      <Text>
        {Bool
          ? `운동시 대흉근, 삼두근, 전면/측면삼각근\n복근, 전거근, 광배근 등의 근육군이 쓰인다.`
          : `등척성 코어 근육 운동으로 근지구렬 향상에 도움을 주며 \n늑골, 척추, 골반을 연결하고 몸을 바로세우는 \n근육을 단련하여 자세 교정에 도움을 준다.`}
      </Text>
      <Image
        style={style.img}
        source={
          Bool
            ? require("../images/pushUp.png")
            : require("../images/flank.png")
        }
      />
      <PurpleBtn
        label={"바로 시작"}
        Btnstyle={true}
        onPress={() => navigation.navigate("camera")}
      />
    </View>
  );
}
