import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, Alert } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    // alignItems: 'center',
    //justifyContent: 'center',
  },
});



class App extends Component {

  render() {


    return (
      <ScrollView style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        {/** <Image source={require('./assets/konexio.png')}/> */}


        <Image
          source={{ uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png' }}
          style={{ width: 350, height: 100 }} />

        <Button
          onPress={() => {
            alert('You tapped the button!');
          }}
          title="Press Me"
        />
        <StatusBar style="auto" />
        <View>
          < Text style={{ fontSize: 30, paddingTop: 80, paddingBottom: 80 }}> Konexio-reactNative</Text>
          < Text style={{ textAlign: "center", paddingTop: 80, paddingBottom: 80 }}>reactNative</Text>
          < Text style={{ fontWeight: 'bold', paddingTop: 80, paddingBottom: 80 }}>reactNative</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>



        </View>
      </ScrollView>

    );
  }

}



export default App;