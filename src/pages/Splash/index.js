import React, { useEffect } from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import logo from "../../assets/logo.png";

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("App");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
    </View>
  );
}
