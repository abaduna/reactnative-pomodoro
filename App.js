import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Platform,
  Text,
  View,
  SafeArrayView,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import Header from "./src/componets/Header";
import Time from "./src/componets/Time";
// import {Audio} from "expo-av"
export default function App() {
  const colors = ["#f7DC6F", "#A2D9CE", "#D7BDE2"];
  const [isWorking, setIsWorcking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREACK");
  const [isActiv, setIsActiv] = useState(false);
  useEffect(() => {
    let intervall = null;
    if (isActiv) {
      intervall = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      clearInterval(intervall);
    }

    return () => clearInterval(intervall);
  }, [isActiv, time]);
  function handlerStartAtaop() {
    setIsActiv(!isActiv);
  }
  //  async function Play(params) {
  //     const {sound} = await Audio.Sound.createAsync(
  //       require("asets/audio.mp3")
  //     )
  //     await sound.playAsync()
  //   }
  return (
    <View style={[styles.container, { backgroundColor: colors[currentTime] }]}>
      <Header
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        setTime={setTime}
      ></Header>
      <Time time={time}></Time>
      <TouchableOpacity onPress={handlerStartAtaop} style={styles.button}>
        <Text
          style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
        >
          {isActiv ? "Stop" : "Play"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: 25, flex: 1, paddingHorizontal: 15 },
  text: { fontSize: 32, fontWeight: "bold" },
  button: {
    backgroundColor: "#333333",
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
  },
});
