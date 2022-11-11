import * as React from 'react';
import { Linking, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WebView } from 'react-native-webview';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DataStudents from './datamhs.json';
import { ScrollView } from 'react-native-gesture-handler';

function PointScreen() {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <WebView source={{ uri: 'https://anshori.github.io/leafletjs-geojson-jquery/point.html' }} />
    </View>
  );
}

function LineScreen() {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <WebView source={{ uri: 'https://anshori.github.io/leafletjs-geojson-jquery/line.html' }} />
    </View>
  );
}

function PolygonScreen() {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <WebView source={{ uri: 'https://anshori.github.io/leafletjs-geojson-jquery/polygon.html' }} />
    </View>
  );
}

function StudentParse() {
  return (
    DataStudents.map((item) => (
      <TouchableOpacity
      onPress={() => 
        Linking.openURL('google.navigation:q=' + item.latitude + ','+ item.longitude)}>

      <View style={{ backgroundColor: item.jeniskelamin == 'Laki-laki' ? 'lightblue' : 'pink', 
      margin:10, 
      padding:10 
      }}>
        <FontAwesome5 name={item.fontawesome5icon} size={40} />
        <Text style={{}}>{item.nama}</Text>
        <Text>{item.kotaasal}</Text>
        <Text>{item.jeniskelamin}</Text>
      </View>

      </TouchableOpacity>
    ))
  );
}

function StudentScreen() {
  return (
    <ScrollView>
      <View >
        <StudentParse />
      </View>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          // FontAwesome5
          if (route.name === 'Point') {
            iconName = focused ? 'map-marker-alt' : 'map-marker-alt';
          } else if (route.name === 'Line') {
            iconName = focused ? 'wave-square' : 'wave-square';
          } else if (route.name === 'Polygon') {
            iconName = focused ? 'draw-polygon' : 'draw-polygon';
          } else if (route.name === 'Student') {
            iconName = focused ? 'users' : 'users';
          }

          return (
            <FontAwesome5 name={iconName} size={size} color={color} solid />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Point" component={PointScreen} />
        <Tab.Screen name="Line" component={LineScreen} />
        <Tab.Screen name="Polygon" component={PolygonScreen} />
        <Tab.Screen name="Student" component={StudentScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}