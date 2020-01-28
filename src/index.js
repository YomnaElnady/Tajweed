import React from 'react';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import {mapping, light as lightTheme} from '@eva-design/eva';
import Navigator from '_navigations';

const App = () => (
  //<ApplicationProvider mapping={mapping} theme={lightTheme}>
  <Navigator />
);
//</ApplicationProvider>

export default App;
