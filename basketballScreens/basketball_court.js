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
              source={require('./assests/basketball-court-lines.png')}
              style={styles.textimage}
            />
            <Text> </Text>
            <Text style={{ color: 'white', fontFamily: 'Times', fontSize:15 }}>
              {example.dimensions}
            </Text>
          </View> 
          
          <Text> </Text>

          <View>
            <Text style={{ color: 'white', fontFamily: 'Times', fontSize: 20 }}>
              Baseline and Sideline:
            </Text>
            
            <Text> </Text>
            <Image
              source={require('./assests/sideline-and-baseline.jpg')}
              style={styles.textimage}
            />

            <Text> </Text>
            <Text style={{ color: 'white', fontFamily: 'Times' }}>
              {example.lines}
            </Text>

            <Text> </Text>

            <Text style={{ color: 'white', fontFamily: 'Times', fontSize: 20 }}>
              Free Throw Area:
            </Text>

            <Image
              source={require('./assests/free-throw.jpg')}
              style={styles.textimage}
            />

            <Text> </Text>

            <Text style={{ color: 'white', fontFamily: 'Times' }}>
              {example.free_throw}
            </Text>

            <Text> </Text>

            <Text style={{ color: 'white', fontFamily: 'Times', fontSize:20 }}>
              Many parts of the baskteball court have their own names:
            </Text>

            <Text> </Text>

            <Text style={{ color: 'white', fontFamily: 'Times', fontSize: 20 }}>
              The Corners:
            </Text>
            
            <Image
              source={require('./assests/corners.jpg')}
              style={styles.textimage}
            />

            <Text> </Text>

            <Text style={{ color: 'white', fontFamily: 'Times' }}>
              {example.corners}
            </Text>
            
            <Text> </Text>

            <Text style={{ color: 'white', fontFamily: 'Times', fontSize: 20 }}>
              The Wing:
            </Text>

            <Image
              source={require('./assests/wing.jpg')}
              style={styles.textimage}
            />
            
            <Text> </Text>
            
            <Text style={{ color: 'white', fontFamily: 'Times' }}>
              {example.wing}
            </Text>

            <Text> </Text>

            <Text style={{ color: 'white', fontFamily: 'Times', fontSize: 20 }}>
              Top of the Key:
            </Text>

            <Image
              source={require('./assests/top-of-the-key.jpg')}
              style={styles.textimage}
            />
            
            <Text> </Text>
            
            <Text style={{ color: 'white', fontFamily: 'Times' }}>
              {example.top_of_the_key}
            </Text>

            <Text> </Text>

            <Text style={{ color: 'white', fontFamily: 'Times', fontSize: 20 }}>
              High Post and Low Post:
            </Text>

            <Image
              source={require('./assests/high-and-low-post.jpg')}
              style={styles.textimage}
            />
            
            <Text> </Text>
            
            <Text style={{ color: 'white', fontFamily: 'Times' }}>
              {example.hight_post_low_post}
            </Text>

            <Text> </Text>

            <Text style={{ color: 'white', fontFamily: 'Times', fontSize: 20 }}>
              The Elbows:
            </Text>

            <Image
              source={require('./assests/elbows.jpg')}
              style={styles.textimage}
            />
            
            <Text> </Text>
            
            <Text style={{ color: 'white', fontFamily: 'Times' }}>
              {example.elbows}
            </Text>

            <Text> </Text>

            <Text style={{ color: 'white', fontFamily: 'Times', fontSize: 20 }}>
              Midcourt:
            </Text>

            <Image
              source={require('./assests/midcourt.jpg')}
              style={styles.textimage}
            />
            
            <Text> </Text>
            
            <Text style={{ color: 'white', fontFamily: 'Times' }}>
              {example.midcourt}
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
