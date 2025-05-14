import React from "react";
import { Text, View, StyleSheet, FlatList, Image, SafeAreaView } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.logo}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/abstract-background-design-red_53876-43381.jpg?t=st=1746982921~exp=1746986521~hmac=ed7fbeb5e7ad51e075497a7593575fa2c889fb1ef9ab0ab6e2d6b01f2665b10a&w=826"
          }}
          style={{ width: 300, height: 200 }}
        />
      </View>
    </SafeAreaView>
  );
};
export default App;
const styles=StyleSheet.create({
  
page:{
  flex:1,
  backgroundColor:"white",
  paddingTop:50,
},
logo:{
justifyContent:"center",
alignItems:"center",
}
})