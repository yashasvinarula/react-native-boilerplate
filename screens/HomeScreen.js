import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class HomeScreen extends Component{
  render(){
    return(
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Welcome to your App</Text>
            <Text>This is the HomeScreen for your App.</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({

})

export default HomeScreen;
