import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

/**
 * Components
 */
import MainScene from './views/MainScene';
import AlertScene from './views/AlertScene';
import CustomNavBar from './views/CustomNavBar';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root" component={MainScene}>
          <Scene
            key="main"
            component={MainScene}
            title="My First App"
            navigationBarStyle={{ marginTop: 24, backgroundColor: '#2868C7' }}
            headerTitleStyle={{ color: '#fff' }}
          />
          <Scene key="alert" title="Alert View" navBar={CustomNavBar} backTitle="Back" component={AlertScene} />
        </Stack>
      </Router>
    );
  }
}

export default Routes;
