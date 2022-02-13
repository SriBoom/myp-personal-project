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
              source={require('./assests/3676e3bde73e622884055082ed0bdbb4.jpg')}
              style={styles.textimage}
            />
            
            <Text
              style={{
                color: 'white',
                fontFamily: 'Times',
                marginTop: 50,
                fontSize: 40,
              }}>
              Violations:
            </Text>
            <Text> </Text>
            <Text style={{ color: 'white', fontFamily: 'Times' }}>
              If a team commits a violations, it usally leads to a trunover of
              the ball or free throws. Here are the violations a team might
              commit:
            </Text>
          </View>

          <Text> </Text>

          <Text style={{ color: 'white', fontFamily: 'Times', fontSize: 20 }}>
            Double Dribble:
          </Text>
          
          <Image
              source={require('./assests/basketball-double-dribble.png')}
              style={styles.textimage}
            />

          <Text> </Text>

          <Text style={{ color: 'white', fontFamily: 'Times' }}>
            {example.violation_1}
          </Text>
          
          <Text> </Text>

          <Text style={{ color: 'white', fontFamily: 'Times', fontSize: 20 }}>
            Travelling Violation:
          </Text>
          
          <Image
              source={require('./assests/basketball-traveling.png')}
              style={styles.textimage}
            />

          <Text> </Text>

          <Text style={{ color: 'white', fontFamily: 'Times' }}>
            {example.violation_2}
          </Text>

          <Text> </Text>
          
          <Text style={{ color: 'white', fontFamily: 'Times', fontSize: 20 }}>
            Pivot Foot:
          </Text>
          
          <Image
              source={require('./assests/basketball-pivoting.png')}
              style={styles.textimage}
            />

          <Text> </Text>

          <Text style={{ color: 'white', fontFamily: 'Times' }}>
            {example.violation_3}
          </Text>

          <Text> </Text>
          
          <Text style={{ color: 'white', fontFamily: 'Times', fontSize: 20 }}>
            Backcourt Violation:
          </Text>
          
          <Image
              source={require('./assests/basketball-backcourt-violation.png')}
              style={styles.textimage}
            />

          <Text> </Text>

          <Text style={{ color: 'white', fontFamily: 'Times' }}>
            {example.violation_4}
          </Text> 
        
          <Text> </Text>
          
          <Text style={{ color: 'white', fontFamily: 'Times', fontSize: 20 }}>
            Goal Tending Violation:
          </Text>
          
          <Image
              source={require('./assests/goal-tending.jpg')}
              style={styles.textimage}
            />

          <Text> </Text>

          <Text style={{ color: 'white', fontFamily: 'Times' }}>
            {example.violation_5}
          </Text>

          <Text> </Text>
          
          <Text style={{ color: 'white', fontFamily: 'Times', fontSize: 20 }}>
            Lane Violation:
          </Text>
          
          <Image
              source={require('./assests/basketball-lane-violation.png')}
              style={styles.textimage}
            />

          <Text> </Text>

          <Text style={{ color: 'white', fontFamily: 'Times' }}>
            {example.violation_6}
          </Text>
          
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
