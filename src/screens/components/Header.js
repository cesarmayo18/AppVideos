import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

function Header(props) {
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/logo.jpg')}
          style={styles.logo}
        />
        <View style={styles.right}>{props.children}</View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    height: 20,
    width: 60,
    resizeMode: 'contain',
  },
  container: {
    padding: 5,
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default Header;
