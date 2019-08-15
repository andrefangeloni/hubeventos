<<<<<<< HEAD
import React from "react";
import { StatusBar } from "react-native";
import Routes from "./routes";
import "./config/ReactotronConfig";
=======
import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';
>>>>>>> Melhoria na estilização

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
