<<<<<<< HEAD
import React from "react";
=======
import React from 'react';
>>>>>>> Melhoria na estilização
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
<<<<<<< HEAD
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import Splash from "./pages/Splash";
import Feed from "./pages/Feed";
import AddEvent from "./pages/AddEvent";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EventDetails from "./pages/EventDetails";
=======
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Splash from './pages/Splash';
import Feed from './pages/Feed';
import AddEvent from './pages/AddEvent';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import EventDetails from './pages/EventDetails';
>>>>>>> Melhoria na estilização

const authRouter = createAppContainer(
  createStackNavigator(
    {
<<<<<<< HEAD
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
=======
      Login: {screen: Login, navigationOptions: {title: 'Login'}},
      Register: {screen: Register, navigationOptions: {title: 'Registrar'}},
    },
    {
      initialRouteName: 'Login',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
      },
    },
  ),
>>>>>>> Melhoria na estilização
);

const loginOrProfileRouter = createAppContainer(
  createSwitchNavigator(
    {
      Profile,
      Auth: authRouter,
    },
    {
<<<<<<< HEAD
      initialRouteName: "Auth",
    }
  )
=======
      initialRouteName: 'Auth',
    },
  ),
>>>>>>> Melhoria na estilização
);

const feedRouter = createAppContainer(
  createStackNavigator(
    {
<<<<<<< HEAD
      Feed: { screen: Feed, navigationOptions: { title: "Hub Eventos" } },
      EventDetails: {
        screen: EventDetails,
        navigationOptions: { title: "Detalhes do Evento" },
=======
      Feed: {screen: Feed, navigationOptions: {title: 'Hub Eventos'}},
      EventDetails: {
        screen: EventDetails,
        navigationOptions: {title: 'Detalhes do Evento'},
>>>>>>> Melhoria na estilização
      },
    },
    {
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
<<<<<<< HEAD
          backgroundColor: "#7159c1",
        },
        headerTintColor: "#FFF",
      },
    }
  )
=======
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
      },
    },
  ),
>>>>>>> Melhoria na estilização
);

const MenuRoutes = {
  Feed: {
<<<<<<< HEAD
    name: "Feed",
    screen: feedRouter,
    navigationOptions: {
      title: "Feed",
      tabBarIcon: ({ tintColor }) => (
=======
    name: 'Feed',
    screen: feedRouter,
    navigationOptions: {
      title: 'Feed',
      tabBarIcon: ({tintColor}) => (
>>>>>>> Melhoria na estilização
        <Icon name="home" size={30} color={tintColor} />
      ),
    },
  },
  Add: {
<<<<<<< HEAD
    name: "AddEvent",
    screen: AddEvent,
    navigationOptions: {
      title: "Add Event",
      tabBarIcon: ({ tintColor }) => (
=======
    name: 'AddEvent',
    screen: AddEvent,
    navigationOptions: {
      title: 'Add Event',
      tabBarIcon: ({tintColor}) => (
>>>>>>> Melhoria na estilização
        <Icon name="plus-square" size={30} color={tintColor} />
      ),
    },
  },
  Profile: {
<<<<<<< HEAD
    name: "Profile",
    screen: loginOrProfileRouter,
    navigationOptions: {
      title: "Profile",
      tabBarIcon: ({ tintColor }) => (
=======
    name: 'Profile',
    screen: loginOrProfileRouter,
    navigationOptions: {
      title: 'Profile',
      tabBarIcon: ({tintColor}) => (
>>>>>>> Melhoria na estilização
        <Icon name="user" size={30} color={tintColor} />
      ),
    },
  },
};

const MenuConfig = {
<<<<<<< HEAD
  initialRouteName: "Feed",
  tabBarOptions: {
    showLabel: false,
    activeTintColor: "#7159c1",
=======
  initialRouteName: 'Feed',
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#7159c1',
>>>>>>> Melhoria na estilização
  },
};

const MenuNavigator = createAppContainer(
<<<<<<< HEAD
  createBottomTabNavigator(MenuRoutes, MenuConfig)
=======
  createBottomTabNavigator(MenuRoutes, MenuConfig),
>>>>>>> Melhoria na estilização
);

const SplashRouter = createAppContainer(
  createSwitchNavigator(
    {
      Splash,
      App: MenuNavigator,
    },
    {
<<<<<<< HEAD
      initialRouteName: "Splash",
    }
  )
=======
      initialRouteName: 'Splash',
    },
  ),
>>>>>>> Melhoria na estilização
);

const Routes = createAppContainer(
  createStackNavigator(
    {
      Feed,
      EventDetails,
    },
    {
<<<<<<< HEAD
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
=======
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
      },
    },
  ),
>>>>>>> Melhoria na estilização
);

export default SplashRouter;
