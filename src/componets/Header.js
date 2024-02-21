import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
const option = ["POMO", "SHORT", "BREACK"];
export default function Header({ setTime, setCurrentTime, currentTime }) {
  function handlePress(index) {
    const newTime = index === 0 ? 25: index === 1 ? 5 : 15
    setCurrentTime(index)
    setTime(newTime*60)
  }
  return (
    <View style={{ flexDirection: "row" }}>
      {option.map((option, index) => (
        <TouchableOpacity 
        key={index} 
        style={[styles.itemnsStyle,currentTime !==index &&{borderColor:"transparent"}]} 
        onPress={()=>handlePress(index)}>
          <Text style={{fontWeight:"bold"}}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  itemnsStyle: {
    width: "33%",
    alignItems:"center",
    borderWidth: 3,
    padding: 5,
    borderRadius:15,
    borderColor:"black",
    marginVertical:20
  },
});
