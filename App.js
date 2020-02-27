import React, {Component} from 'react';
import {Text, SafeAreaView} from 'react-native';

import Home from './src/screens/containers/Home';
import Header from './src/screens/components/Header';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView>
        <Home>
          <Header />
          <Text>buscador</Text>
          <Text>categorías</Text>
          <Text>sugerencias</Text>
        </Home>
      </SafeAreaView>
    );
  }
}
