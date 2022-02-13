import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Avatar } from 'react-native-elements';

export default class MainPage extends React.Component {
  render() {
    const image = {
      uri: 'https://www.prosportsbackgrounds.com/wp-content/uploads/elementor/thumbs/NBA-logo-oaqtnkee699gza5sf2zndoxchllvfgog07jyog5oxc.png',
    };

    return (
      <View style={styles.container}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Sports ED</Text>
        </View>
        <View style={styles.iconContainer}>
          <Avatar
            size={80}
            rounded
            source={{
              uri: 'https://media.npr.org/assets/img/2020/06/10/gettyimages-200199027-001_wide-3ff0f063a2bf1ab01550d3508c816bc43009d215.jpg?s=1400',
            }}
            containerStyle={{
              marginTop: -750,
              marginLeft: 5,
              justifyContent: 'fixed',
              alignItem: 'fixed',
              probablyPosition: 'fixed',
            }}
          />
        </View>
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
    color: 'black',
    fontWeight:"bold",
    fontFamily: 'Cochin',
    marginBottom: 350,
    marginLeft: 110,
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
