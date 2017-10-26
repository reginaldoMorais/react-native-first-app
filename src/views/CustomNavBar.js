import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class CustomNavBar extends Component {
  // constructor(props) {
  //   super(props)
  // }

  _renderLeft() {
    if (Actions.currentScene === 'AlertScene') {
      return (
        <TouchableOpacity
          onPress={() => console.log('Hamburger button pressed')}
          style={[styles.navBarItem, { paddingLeft: 10 }]}
        >
          <Image
            style={{
              width: 30,
              height: 50,
            }}
            resizeMode="contain"
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png',
            }}
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={Actions.pop} style={[styles.navBarItem, { paddingLeft: 10 }]}>
          <Image
            style={{
              width: 30,
              height: 50,
            }}
            resizeMode="contain"
            source={{ uri: 'https://image.flaticon.com/icons/png/512/0/340.png' }}
          />
        </TouchableOpacity>
      );
    }
  }

  _renderMiddle() {
    return (
      <View style={styles.navBarItem2}>
        <Text>{this.props.title}</Text>
      </View>
    );
  }

  _renderRight() {
    return (
      <View style={[styles.navBarItem, { flexDirection: 'row', justifyContent: 'flex-end' }]}>
        <TouchableOpacity onPress={() => console.log('Share')} style={{ paddingRight: 10 }}>
          <Image
            style={{
              width: 30,
              height: 50,
            }}
            resizeMode="contain"
            source={{ uri: 'https://cdn3.iconfinder.com/data/icons/glypho-free/64/share-512.png' }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Search')} style={{ paddingRight: 10 }}>
          <Image
            style={{
              width: 30,
              height: 50,
            }}
            resizeMode="contain"
            source={{ uri: 'https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic//search1600.png' }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    let dinamicStyle = {};
    if (Actions.currentScene === 'customNavBar1') {
      dinamicStyle = { backgroundColor: 'red' };
    } else {
      dinamicStyle = { backgroundColor: 'yellow' };
    }

    return (
      <View style={[styles.container, dinamicStyle]}>
        {this._renderLeft()}
        {this._renderMiddle()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? 64 : 85,
    flexDirection: 'row',
    paddingTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBarItem: {
    flex: 1,
    justifyContent: 'center',
  },
  navBarItem2: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
