<<<<<<< HEAD
import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import logo from "../../assets/logo.png";
import styles from "./styles";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister() {
    navigation.navigate("Register");
=======
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import logo from '../../assets/logo.png';
import styles from './styles';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleRegister() {
    navigation.navigate('Register');
>>>>>>> Melhoria na estilização
  }

  return (
    <View style={styles.container}>
      <Image source={logo} />
      <TextInput
        autoCapitalize="none"
        placeholder="E-mail"
        style={styles.input}
        autoFocus
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
<<<<<<< HEAD
      <TouchableOpacity onPress={() => ""} style={styles.button}>
=======
      <TouchableOpacity onPress={() => ''} style={styles.button}>
>>>>>>> Melhoria na estilização
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRegister} style={styles.button}>
        <Text style={styles.buttonText}>Criar nova conta</Text>
      </TouchableOpacity>
    </View>
  );
}
