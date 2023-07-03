import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SocialIcons = () => {
  const navigation = useNavigation();

  const handleInstagramPress = () => {
    // Handle Instagram link navigation
    // Example: navigation.navigate('InstagramScreen');
  };

  const handleFacebookPress = () => {
    // Handle Facebook link navigation
    // Example: navigation.navigate('FacebookScreen');
  };

  const handleWhatsAppPress = () => {
    // Handle WhatsApp link navigation
    // Example: navigation.navigate('WhatsAppScreen');
  };

  return (
    <View style={{ flexDirection: "row", marginLeft: 10 }}>
      <TouchableOpacity onPress={handleInstagramPress}>
        <Ionicons
          name="logo-instagram"
          size={30}
          color="black"
          style={{ marginRight: 10 }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleFacebookPress}>
        <Ionicons
          name="logo-facebook"
          size={30}
          color="black"
          style={{ marginRight: 10 }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleWhatsAppPress}>
        <Ionicons name="logo-whatsapp" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default SocialIcons;
