import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";

const Getstart = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ width: "100%", height: 150, resizeMode: "cover" }}
        source={require("./assets/pngtree-bloody-youth-may-fourth-youth-festival-poster-banner-image_260820.jpg")}
      ></ImageBackground>
      <View style={{ backgroundColor: "#FBE1D2", padding: 20, height: 465 }}>
        <View style={{ alignItems: "center" }}></View>
      </View>
      <View>
        <TouchableOpacity
          // onPress={navigateToProfile}
          style={{
            backgroundColor: "#FBE1D2",
            padding: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 18 }}>
            Edit Your Profile
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Dashboard")}
          style={{
            backgroundColor: "#6F2900",
            padding: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            Get Start
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});
export default Getstart;
