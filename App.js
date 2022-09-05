import 'react-native-gesture-handler';
import React from 'react';
// import { StyleSheet, Text, View, Image, ScrollView, StatusBar, SafeAreaView, Platform } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';  
import HomeScreen from './pages/Home';
import Projects from './pages/Projects';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
        <NavigationContainer>
            <Drawer.Navigator // reacti switchy
              initialRouteName="Home"
              screenOptions={{
                // drawerPosition: "right", //vortexic bacvi popupy
                drawerStyle: {
                  // backgroundColor: "#000", //menu listi backgroundy
                },
                // drawerType: "back" //bacvox slideri tesaky
                // color: "#fff"

              }}
            >
              <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  drawerLabel: "Home",
                  drawerIcon:(props) => <AntDesign name="home" size={24} color={props.color} />,
                  headerStyle: {
                    backgroundColor: '#1e90ff',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
              <Drawer.Screen
                name="Projects"
                component={Projects}
                options={{
                  title: "My Projects", 
                  drawerLabel: "Projects",
                  drawerIcon:(props) => <Octicons name="project" size={24} color={props.color} />,
                  headerStyle: {
                    backgroundColor: '#1e90ff',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  }, 
                }}
              />
            </Drawer.Navigator>
        </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   scrollView: {
//     minHeight: "100%",
//     backgroundColor: "#C1C1C1"
//   }
// });
