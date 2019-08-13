import React, { Component } from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import logo from "../../assets/logo.png";

export default class Splash extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      const { navigation } = this.props;
      navigation.navigate("App");
    }, 2000);
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.image} />
      </View>
    );
  }
}
