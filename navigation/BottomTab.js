import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Basketball from '../screens/Basketball';
import MainPage from '../screens/HomePage';
import Soccer from '../screens/Soccer';
import Football from '../screens/Football';
import Ionicons from 'react-native-vector-icons/Ionicons';

//basketball screens
import Court from '../basketballScreens/basketball_court';
import Positions from '../basketballScreens/positions';
import Rules from '../basketballScreens/rules';
import Violations from '../basketballScreens/violations';

//soccer screens
import Soccer_Court from '../soccerScreens/soccer_court';
import Soccer_Positions from '../soccerScreens/soccer_positions';
import Soccer_Rules from '../soccerScreens/soccer_rules';
import Soccer_Violations from '../soccerScreens/soccer_violations';

//Football screens
import Football_Positions from '../footballScreens/football_positions';
import Football_Rules from '../footballScreens/football_rules'
import Violation1 from '../footballScreens/pre_snap_violations';
import Violation2 from '../footballScreens/violation_during_play'

const Stack = createNativeStackNavigator();
function BasketballStackNavigator() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown:false
    }}
    >
      <Stack.Screen name="Basketball" component={Basketball} />
      <Stack.Screen name="Basketball Rules" component={Rules}/>
      <Stack.Screen name="Basketball Positions" component={Positions}/>
      <Stack.Screen name="Basketball Court" component={Court}/>
      <Stack.Screen name="Basketball Violations" component={Violations}/>
    </Stack.Navigator>
  );
}

function SoccerStackNavigator() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown:false
    }}
    >
      <Stack.Screen name="Soccer" component={Soccer} />
      <Stack.Screen name="Soccer Rules" component={Soccer_Rules}/>
      <Stack.Screen name="Soccer Positions" component={Soccer_Positions}/>
      <Stack.Screen name="Soccer Court" component={Soccer_Court}/>
      <Stack.Screen name="Soccer Violations" component={Soccer_Violations}/>
    </Stack.Navigator>
  );
}

function FootballStackNavigator() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown:false
    }}
    >
      <Stack.Screen name="Football" component={Football} />
      <Stack.Screen name="Football Rules" component={Football_Rules}/>
      <Stack.Screen name="Positions" component={Football_Positions}/>
      <Stack.Screen name="Pre-Snap Violations" component={Violation1}/>
      <Stack.Screen name="Violations During Play" component={Violation2}/>
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();
export default function Tab_Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        labeled={true}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Basketball') {
              iconName = focused ? 'basketball' : 'basketball-outline';
            } else if (route.name === 'Soccer') {
              iconName = focused ? 'football' : 'football-outline';
            } else if (route.name === 'Football') {
              iconName = focused
                ? 'american-football'
                : 'american-football-outline';
            }

            return (
              <Ionicons
                name={iconName}
                size={25}
                color={color}
                style={{ width: 30, height: 30 }}
              />
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={MainPage} />
        <Tab.Screen name="Basketball" component={BasketballStackNavigator} />
        <Tab.Screen name="Soccer" component={SoccerStackNavigator} />
        <Tab.Screen name="Football" component={FootballStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

