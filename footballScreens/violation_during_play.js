import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';

export default class Violation2 extends React.Component {
  render() {
    const image = { uri: 'https://www.wallpaperuse.com/wallp/51-511453_m.jpg' };
    return (
      <View style={styles.container}>
      <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.image}
        />
        <Text>Violations during play</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  titleText: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Cochin',
    marginBottom: -50,
    marginLeft: 90,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 30,
    marginLeft: 65,
    marginBottom: 350,
    borderColor: 'white',
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 30,
    marginLeft: 65,
    marginTop: -300,
    borderColor: 'white',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 30,
    marginLeft: 65,
    marginTop: -220,
    borderColor: 'white',
  },
  button3: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 30,
    marginLeft: 65,
    marginTop: -140,
    borderColor: 'white',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: 700,
  },
});
