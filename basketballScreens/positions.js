import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import * as example from './db.json';

class FirebaseApp extends Component {
  render() {
    const image = {
      uri: 'https://i.pinimg.com/474x/1f/91/a0/1f91a0e4a7c43bfddd4510006878c4be.jpg',
    };

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Sports A-Z</Text>
          </View>
          <View
          /*
            style={{
              margin: 13,
              backgroundColor: '#EA872A',
              marginBottom: 300,
              borderRadius: 10,
            }}
            */
          >
            <Image
              source={require('./assests/positions.jpeg')}
              style={styles.textimage}
            />
            <Text> </Text>
            <Text style={{ color: 'white', fontFamily: 'Times' }}>
              {example.number_of_players}
            </Text>
          </View>

          <View>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Times',
                marginTop: 50,
                fontSize: 40,
              }}>
              5 Basketball Positions:
            </Text>

            <Text> </Text>

            <Text style={{ color: 'white', fontFamily: 'Times', fontSize: 20 }}>
              Point Guard:
            </Text>

            <Image
              source={require('./assests/point-guard.png')}
              style={styles.textimage}
            />

            <Text> </Text>
            <Text style={{ color: 'white', fontFamily: 'Times' }}>
              {example.point_guard}
            </Text>

            <Text> </Text>

            <Text style={{ color: 'white', fontFamily: 'Times', fontSize: 20 }}>
              Shooting Guard:
            </Text>

            <Image
              source={require('./assests/shooting-guard.png')}
              style={styles.textimage}
            />

            <Text> </Text>

            <Text style={{ color: 'white', fontFamily: 'Times' }}>
              {example.shooting_guard}
            </Text>

            <Text> </Text>

            <Text style={{ color: 'white', fontFamily: 'Times', fontSize: 20 }}>
              Small Forward:
            </Text>

            <Text> </Text>
            
            <Image
              source={require('./assests/small-forward.png')}
              style={styles.textimage}
            />

            <Text style={{ color: 'white', fontFamily: 'Times' }}>
              {example.small_forward}
            </Text>

            <Text
              style={{
                color: 'white',
                fontFamily: 'Times',
                marginTop: 50,
                fontSize: 20,
              }}>
              Power Forward:
            </Text>

            <Text> </Text>

            <Text style={{ color: 'white', fontFamily: 'Times' }}>
              {example.power_forward}
            </Text>

            <Text> </Text>

            <Image
              source={require('./assests/power-forward.png')}
              style={styles.textimage}
            />

            <Text style={{ color: 'white', fontFamily: 'Times' }}>
              {example.shot_clock}
            </Text>

            <Text
              style={{
                color: 'white',
                fontFamily: 'Times',
                marginTop: 50,
                fontSize: 20,
              }}>
              Center:
            </Text>

            <Text> </Text>

            <Image
              source={require('./assests/center.png')}
              style={styles.textimage}
            />

            <Text style={{ color: 'white', fontFamily: 'Times' }}>
              {example.center}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default FirebaseApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#233342',
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
    marginTop: -300,
    marginLeft: 100,
  },
  textContainer: {
    margin: 13,
    backgroundColor: '#EA872A',
    marginBottom: 300,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: 1000,
  },
  textimage: {
    resizeMode: 'contain',
    width: '95%',
    alignSelf: 'center',
    height: 250,
  },
});
