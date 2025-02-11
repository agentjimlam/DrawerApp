import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons

function Feed() {
  return (
    <View>
      <Text>Feed</Text>
    </View>
  );
}

function Article(){
  return (
    <View>
      <Text>Article</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
          name="Feed" 
          component={Feed}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="newspaper-outline" size={size} color={color} />
            ),
          }}
        ></Drawer.Screen>
        <Drawer.Screen 
          name="Article" 
          component={Article}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="document-text-outline" size={size} color={color} />
            ),
          }}
        ></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default MyDrawer;