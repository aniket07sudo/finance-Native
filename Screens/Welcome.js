import React, { useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Switch, Dimensions,TouchableOpacity } from 'react-native';

const Welcome = (props) => {

  const [dark, setDark] = useState(true);
  const toggleSwitch = () => setDark(previousState => !previousState);

    return (
      <View style={{ ...styles.container, backgroundColor: dark ? '#121212' : '#fff' }}>
        <Switch
        trackColor={{ false: "#767577", true: "#f4f3f4" }}
        thumbColor={dark ? "#31A062" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
          value={dark}
          style={{position:'absolute',top:30,right:20}}
        />
        <View style={styles.imageContainer}>
          <Image source={dark ? require('../assets/image.png') : require('../assets/welcome.png')} />
        </View>
        <View >
          <Text style={{ ...styles.head ,color:dark ? 'white' : 'black'}}>Stay on top of your finance with us.</Text>
          <Text style={{ ...styles.content, color:dark ? 'white' : 'black'}}>We are your new financial Advisors to recommed the best investments for you.</Text>
        </View>
        <View>
          <TouchableOpacity style={{ ...styles.button, backgroundColor: dark ? '#31A062' : '#31A062' }} onPress={() => props.navigation.navigate({
            routeName: 'Signup', params: {
            darkMode:dark
          } })}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate({
            routeName: 'Dashboard', params: {
              darkMode:dark
        } })}>
          <Text style={{color:'#31A062',fontSize:17,textAlign:'center',marginTop:10}}>Login</Text>
          </TouchableOpacity>
          </View>
        </View>
    
    )
}

const styles = StyleSheet.create({
  container: {
    padding: 27,
    height: Dimensions.get('window').height,
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'space-evenly'
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  head: {
    fontSize: 34,
    textAlign: 'center',
    fontFamily:'dm-bold',
    letterSpacing: -0.5,
    marginBottom: 5,
    marginTop: -25
  },
  content: {
    textAlign: 'center',
    fontFamily: 'sf-pro',
    fontSize:17
  },
  button: {
    padding:18,
    borderRadius: 20
    
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize:17
  }
});


export default Welcome;