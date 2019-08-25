import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './screens/HomeScreen';

class App extends Component{
  render(){
    return(
      <Navigator />
    )
  }
}

const AppNavigator = createStackNavigator(
  {
    Home:{
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      }
    }
  },
  {
    initialRouteName: "Home"
  } 
 );

const Navigator = createAppContainer(AppNavigator);

export default App;
