import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri:
            "https://scontent.fcpq7-1.fna.fbcdn.net/v/t1.0-9/12072595_900644893359889_3646962013515667872_n.jpg?_nc_cat=104&_nc_oc=AQlXqA6GlXb0lIWLRuwHg8sTiwQ5nqT-R569_3NlObNyFGATSwnfTPmaiEvkKQYfecQ&_nc_ht=scontent.fcpq7-1.fna&oh=fb77594536ac841fca9ad24472bb5f38&oe=5E127C14",
        }}
      />
      <Text style={styles.nickname}>André Angeloni</Text>
      <Text style={styles.email}>andrefangeloni@gmail.com</Text>
      <TouchableOpacity onPress={() => ""} style={styles.button}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
