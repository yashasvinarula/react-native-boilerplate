import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from '../screens/HomeScreen';

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
  
  export default Navigator;