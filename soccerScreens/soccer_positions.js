import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';

export default class Soccer_Positions extends React.Component{
  render(){
    const image = {
      uri: 'https://www.wallpapertip.com/wmimgs/5-57985_soccer-goal-png-dribble-a-soccer-ball.png',
    };
    return(
      <View style={styles.container}>
      <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.image}
        />
        <Text>Soccer_Positions</Text>
      </View>
    )
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
