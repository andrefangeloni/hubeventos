import React from "react";
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import Splash from "./pages/Splash";
import Feed from "./pages/Feed";
import AddEvent from "./pages/AddEvent";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";

const authRouter = createAppContainer(
  createStackNavigator(
    {
      Login: { screen: Login, navigationOptions: { title: "Login" } },
      Register: { screen: Register, navigationOptions: { title: "Registrar" } },
    },
    {
      initialRouteName: "Login",
    }
  )
);

const loginOrProfileRouter = createAppContainer(
  createSwitchNavigator(
    {
      Profile,
      Auth: authRouter,
    },
    {
      initialRouteName: "Auth",
    }
  )
);

const MenuRoutes = {
  Feed: {
    name: "Feed",
    screen: Feed,
    navigationOptions: {
      title: "Feed",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={30} color={tintColor} />
      ),
    },
  },
  Add: {
    name: "AddEvent",
    screen: AddEvent,
    navigationOptions: {
      title: "Add Event",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="plus-square" size={30} color={tintColor} />
      ),
    },
  },
  Profile: {
    name: "Profile",
    screen: loginOrProfileRouter,
    navigationOptions: {
      title: "Profile",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user" size={30} color={tintColor} />
      ),
    },
  },
};

const MenuConfig = {
  initialRouteName: "Feed",
  tabBarOptions: {
    showLabel: false,
  },
};

const MenuNavigator = createAppContainer(
  createBottomTabNavigator(MenuRoutes, MenuConfig)
);

const SplashRouter = createAppContainer(
  createSwitchNavigator(
    {
      Splash,
      App: MenuNavigator,
    },
    {
      initialRouteName: "Splash",
    }
  )
);

export default SplashRouter;
