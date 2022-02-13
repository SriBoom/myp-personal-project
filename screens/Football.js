import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Avatar } from 'react-native-elements';

export default function Football({ navigation }) {
    const image = { uri: 'https://www.wallpaperuse.com/wallp/51-511453_m.jpg' };
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
            size={64}
            rounded
            source={{
              uri: 'https://cdn.dribbble.com/users/424563/screenshots/2232810/nfl---1.gif',
            }}
            containerStyle={{
              marginTop: -100,
              marginLeft: 5,
              justifyContent: 'fixed',
              alignItem: 'fixed',
              probablyPosition: 'fixed',
            }}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Football Rules')}
          >
            <Text style={{ color: 'white' }}>Rules</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button1}
          onPress={() => navigation.navigate('Pre-Snap Violations')}
          >
            <Text
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                color: 'white',
              }}>
              Pre-Snap Violations
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button2}
          onPress={() => navigation.navigate('Violations During Play')}
          >
            <Text
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                color: 'white',
              }}>
              Violations During a Play
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button3}
          onPress={() => navigation.navigate('Positions')}
          >
            <Text
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                color: 'white',
              }}>
              Positions
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
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
