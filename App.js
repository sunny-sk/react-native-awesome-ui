import React from 'react';
import {Text, AppRegistry} from 'react-native';

const App = () => {
  return (
    <>
      <Text>Hellow</Text>
    </>
  );
};

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
