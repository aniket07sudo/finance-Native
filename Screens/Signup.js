import React from 'react';
import { StyleSheet, Text, View, Platform, Image, Dimensions, TouchableOpacity } from 'react-native';
import Input from '../Components/Input';

const Signup = (props) => {

    const dark = props.navigation.getParam('darkMode');

    return (
        <View style={{ ...styles.container, backgroundColor: dark ? 'black' : '#fff' }}>
           
            <TouchableOpacity style={styles.backButton} onPress={() => props.navigation.goBack()}>
                <Image source={dark ? require('../assets/back.png') :require('../assets/left-arrow.png')} />
            </TouchableOpacity>
            <View style={styles.mainContainer}>
                <View style={styles.heading}>
                    <Text style={{ ...styles.HeadText, color:dark ? 'white' : 'black' }}>Create an account</Text>
                    <Text style={{ ...styles.subHead , color:dark ? 'white' : 'black' }}>Invest and double your income now</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Input placeholder="Full Name" dark={dark} />
                    <Input placeholder="Email Address" dark={dark} />
                    <Input placeholder="Password" dark={dark} />
                    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate({ routeName: 'Signup' })}>
                    <Text style={styles.buttonText}>Create Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate({ routeName: 'Signup' })}>
                    <Text style={{color:'#31A062',fontSize:17,textAlign:'center',marginTop:45}}>Already have an account ?</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        
        padding: 20,
    },
    mainContainer: {
        paddingVertical:'20%'
        
    },
    heading: {
        marginBottom:50
    },
    backButton: {
        position: 'absolute',
        left: '6%',
        top: '4%'
    },
    button: {
    backgroundColor: '#31A062',
    padding:18,
    borderRadius: 20
    },
    inputContainer: {
    //   marginTop:-20
    },
    buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17,
    },
    HeadText: {
        fontSize: 34,
        fontFamily: 'dm-bold',
        letterSpacing: -1,
        textAlign:'center'
    },
    subHead: {
        fontFamily: 'sf-pro',
        fontSize: 17,
        textAlign:'center'
    }
});


export default Signup;