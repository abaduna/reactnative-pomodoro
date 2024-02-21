import { View ,Text,StyleSheet} from "react-native";



export default function Time({time}) {
    const formmaterTime =`${Math.floor(time/60).toString().padStart(2,"0")}:${(time%60).toString().padStart(2,"0")}`
  return (
    <View style={style.container}>
       <Text style={style.timer}>{formmaterTime}</Text>  
    </View>
   
    
  )
}

const style = StyleSheet.create({
    container :{
        backgroundColor:"#F2F2F2",
        padding:15,
        borderRadius:15,
        flex:0.3,
        justifyContent:"center"
    },
    timer:{
        fontSize:80,
        textAlign:"center",
        fontWeight:"bold"
    }
})