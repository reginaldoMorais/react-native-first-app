import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Styles from '../styles/MainStyles';

class MainScene extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Button onPress={() => Actions.alert()} title="Click to open Alert page" style={Styles.btn} />
      </View>
    );
  }
}

export default MainScene;
