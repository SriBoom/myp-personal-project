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
              source={require('./assests/basketball-court-dimensions-and-markings-in-feet-720x444.png')}
              style={styles.textimage}
            />
            <Text
              style={{
                color: 'white',
                fontFamily: 'Times',
                marginTop: 50,
                fontSize: 40,
              }}>
              Game Start:
            </Text>
            <Text> </Text>
            <Text style={{ color: 'white', fontFamily: 'Times' }}>
              {example.game_start}
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
              Scoring System:
            </Text>

            <Text> </Text>

            <Text style={{ color: 'white', fontFamily: 'Times', fontSize: 20 }}>
              Three Points:
            </Text>

            <Image
              source={require('./assests/Three-point-shot-spots.png')}
              style={styles.textimage}
            />

            <Text> </Text>
            <Text style={{ color: 'white', fontFamily: 'Times' }}>
              {example.three_points}
            </Text>

            <Text> </Text>

            <Text style={{ color: 'white', fontFamily: 'Times', fontSize: 20 }}>
              Two Points:
            </Text>
            
            <Image
              source={require('./assests/Layout_Basketball_NFHS_Indoor_Half_Court__37111.1422337328.png')}
              style={styles.textimage}
            />

            <Text> </Text>

            <Text style={{ color: 'white', fontFamily: 'Times' }}>
              {example.two_points}
            </Text>

            <Text> </Text>

            <Text style={{ color: 'white', fontFamily: 'Times', fontSize: 20 }}>
              One Point:
            </Text>

            <Text> </Text>

            <Text style={{ color: 'white', fontFamily: 'Times' }}>
              {example.one_point}
            </Text>
            
             <Text
              style={{
                color: 'white',
                fontFamily: 'Times',
                marginTop: 50,
                fontSize: 40,
              }}>
              Time System:
            </Text>
            
            <Text> </Text>

            <Text style={{ color: 'white', fontFamily: 'Times' }}>
              {example.game_length}
            </Text>

            <Text> </Text>
            
            <Image
              source={require('./assests/nba-shot-clockjpg.jpg')}
              style={styles.textimage}
            />

            <Text style={{ color: 'white', fontFamily: 'Times' }}>
              {example.shot_clock}
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
