import React from "react"
import {View, Text, StyleSheet, Image, TouchableOpacity, StatusBar} from "react-native"
const App = () => { 
    return (
        <View style={styles.container}>
        <StatusBar backgroundColor="black" barsStyle="light-content"/>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center " ,}}>
        <View style={{flexDirection : "row", alignItems:"center", marginRight:80}} >
        <Image
            source={require("./assets/Opay.png")}
            style={styles.image1}
        />
        <Text style={styles.text1}>HI, FAVOUR</Text>
        </View>
       
        <Image
            source={require("./assets/headset.png")}
            style={styles.image}
        />
         <Image
            source={require("./assets/scanner.png")}
            style={styles.image}
        />
        <Image
            source={require("./assets/web.png")}
            style={styles.image}
        />
        </View>
        <View style={{ backgroundColor:"#00A86B",
        borderRadius:15, 
    opacity :0.9,
    marginTop:30, 
    height:100, 
    padding:10,
    }}>
        
        <View style={styles.Innerbox}>
      
        <View style={{flexDirection :"row", alignItems :"center",flex:1}} >
        <Image
            source={require("./assets/Protect.png")}
            style={styles.image2}
        />
        <Text style={styles.text2}> Available Balance </Text >
        <Image
            source={require("./assets/Eye.png")}
            style={styles.image2} 
        />
        </View>
       
        <Text style={styles.text3}> Transaction History </Text>
        
             </View>
              <View style={styles.inner2}>
        <View style={{flexDirection :"row", alignItems:"center" }} >
  
        <Image
            source={require("./assets/Naira.png")}
            style={styles.image3}/>
           <Text style={{color:"white", fontWeight:"bold", fontSize :20,marginLeft:-7}} > 571.91> </Text>
           </View>
           <View style={styles.Circle} >
           <Text style={{color:"#12B886", fontSize:12, alignSelf:"center",}} > + Add Money </Text>
           </View>
           </View>
  </View>
      <View style={styles.Box2}>
      
      <View style={{backgroundColor:"#F1F1F9", height:55, width:55 ,margin:10,borderRadius:25}}> </View>

        <View style={{backgroundColor:"#F1F1F9", height:55, width:55 ,margin:10,borderRadius:25,}}> </View>

         </View>  
  </View>
        
    )
    };
    export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor: "#F1F1F9",
        paddingTop:100,
        paddingLeft:20,
        paddingRight:20,
    },
    text1: {
        fontSize: 15,
        fontWeight: "bold", 
        color:"black", 
        marginLeft :10,
        // marginBottom: 20,
       }, 
        text2: {
        fontSize: 12,
        fontWeight: "bold", 
        color:"white", 
        //marginLeft 3,
        },
        text3: {
        fontSize: 12,
        fontWeight: "bold", 
        color:"white", 

    },
    image: {
        width: 25,
       height: 25,
    },
            
    image1: {
        width: 20,
       height: 20,
      
      
    },
    image2: {
        width: 25,
       height: 25, 
    },
    image3: {
        width: 25 ,
       height: 25}, 
    inner2:{
    flexDirection :"row", 
    justifyContent :"space-between", 
    marginTop:15,
    }, 
    Circle:{
    height :40,
    width:120,
    justifyContent:"center",  
    backgroundColor:"white", 
    borderRadius:20,
    }, 
    Innerbox:{
    flexDirection:"row", 
    justifyContent :"space-between ", 
    alignItems :"flex-start",  
    }, 
    Box2:{
height:155,
backgroundColor:"white",
marginTop:20,
borderRadius:25,
flexDirection:"column",
justifyContent:"space-between",
paddingLeft:10,
alignItems:"flex-start"
    },
})