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
import EventDetails from "./pages/EventDetails";

const authRouter = createAppContainer(
  createStackNavigator(
    {
      Login: { screen: Login, navigationOptions: { title: "Login" } },
      Register: { screen: Register, navigationOptions: { title: "Registrar" } },
    },
    {
      initialRouteName: "Login",
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "#7159c1",
        },
        headerTintColor: "#FFF",
      },
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

const feedRouter = createAppContainer(
  createStackNavigator(
    {
      Feed: { screen: Feed, navigationOptions: { title: "Hub Eventos" } },
      EventDetails: {
        screen: EventDetails,
        navigationOptions: { title: "Detalhes do Evento" },
      },
    },
    {
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "#7159c1",
        },
        headerTintColor: "#FFF",
      },
    }
  )
);

const MenuRoutes = {
  Feed: {
    name: "Feed",
    screen: feedRouter,
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
    activeTintColor: "#7159c1",
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

const Routes = createAppContainer(
  createStackNavigator(
    {
      Feed,
      EventDetails,
    },
    {
      headerLayoutPreset: "center",
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "#7159c1",
        },
        headerTintColor: "#FFF",
      },
    }
  )
);

export default SplashRouter;
