import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Avatar } from 'react-native-elements';

export default function Soccer({ navigation }) {
    const image = {
      uri: 'https://www.wallpapertip.com/wmimgs/5-57985_soccer-goal-png-dribble-a-soccer-ball.png',
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
              uri: 'https://i.pinimg.com/originals/1b/d1/f2/1bd1f23c584048e23f7a82675c795d30.gif',
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
          onPress={() => navigation.navigate('Soccer Rules')}
          >
            <Text style={{ color: 'black' }}>Rules</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button1}
          onPress={() => navigation.navigate('Soccer Violations')}
          >
            <Text
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                color: 'black',
              }}>
              Violations
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button2}
          onPress={() => navigation.navigate('Soccer Positions')}
          >
            <Text
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                color: 'black',
              }}>
              Positions
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button3}
          onPress={() => navigation.navigate('Soccer Court')}
          >
            <Text
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                color: 'black',
              }}>
              Soccer Court
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
    color: 'black',
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
    borderColor: 'black',
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
    borderColor: 'black',
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
    borderColor: 'black',
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
    borderColor: 'black',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: 700,
  },
});
