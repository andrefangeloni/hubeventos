import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hub Eventos!</Text>
      </View>
    );
  }
}
