import { Camera } from "expo-camera";
import { useRef, useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import GoBack from "../components/goback";

export default function App() {
  const [type, setType] = useState("back"); // "front" 또는 "back" 문자열 사용
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef(null);
  const [isCapturing, setIsCapturing] = useState(false);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <GoBack />
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const takePicture = async () => {
    if (!cameraRef.current) return;
    const photo = await cameraRef.current.takePictureAsync({
      base64: true,
    });
    setCapturedImage(photo);
    console.log("Picture taken:", photo.uri);
  };

  useEffect(() => {
    let intervalId;
    if (isCapturing) {
      intervalId = setInterval(() => {
        takePicture();
      }, 1000); // 1초 간격으로 사진 촬영
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId); // 컴포넌트가 언마운트될 때 정리
  }, [isCapturing]);

  const toggleCameraType = () => {
    setType((prev) => (prev === "back" ? "front" : "back"));
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type} // 문자열로 직접 설정
        ref={cameraRef}
      >
        <View style={styles.buttonContainer}>
          <Button
            title={isCapturing ? "Stop Capturing" : "Start Capturing"}
            onPress={() => setIsCapturing((prev) => !prev)}
          />
          <Button title="Flip Camera" onPress={toggleCameraType} />
        </View>
      </Camera>
      {capturedImage && (
        <View style={styles.previewContainer}>
          <Text style={styles.previewText}>Last Picture Taken:</Text>
          <Text style={styles.previewText}>{capturedImage.uri}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
  previewContainer: {
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  previewText: {
    fontSize: 16,
  },
});
