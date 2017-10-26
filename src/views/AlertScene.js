import React, { Component } from 'react';
import { Text, View, Alert, TextInput, Button } from 'react-native';

import Styles from '../styles/AlertStyles';

class AlertScene extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Reginaldo Morais' };
  }

  alert() {
    Alert.alert('Hello World', this.state.text, [{ text: 'OK', onPress: () => console.log('OK Pressed') }], {
      cancelable: false,
    });
  }

  onChangeText(text) {
    this.setState({ text });
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.content}>
          <View>
            <Text>Enter your name in the field below!</Text>
          </View>
          <View style={Styles.btn}>
            <TextInput
              style={{
                width: 200,
                height: 40,
              }}
              onChangeText={text => this.onChangeText(text)}
              value={this.state.text}
            />
            <Button onPress={() => this.alert()} title="Alert here" />
          </View>
        </View>
      </View>
    );
  }
}

export default AlertScene;
