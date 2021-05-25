import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

const Dashboard = (props) => {

    const dark = props.navigation.getParam('darkMode');

    return (
        <View style={{ ...styles.container, backgroundColor: dark ? 'black' : '#fff' }}>
            <ScrollView>
            <View style={styles.header}>
                <TouchableOpacity >
                    <Image style={{width:20,height:20}} source={dark ? require('../assets/menu-white.png') :require('../assets/menu.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{width:20,height:20}} source={dark ? require('../assets/bell.png') : require('../assets/ringing.png')} />
                    </TouchableOpacity> 
            </View>
            <View style={{marginBottom:20}}> 
                    <Text style={{ ...styles.headText, color:dark ? '#31A078' : 'black' }}>Welcome, Jessie.</Text>
            </View>
                <View style={{ ...styles.card,backgroundColor: dark ? '#2D2D2D' : '#31A078', }}>
                <Text style={{color:'white',fontFamily:'sf-pro',fontWeight:'bold'}}>Your total asset portfolio</Text>
                <View style={styles.cardContent}>
                    <Text style={styles.code}>N203,935</Text>
                        <TouchableOpacity style={{ ...styles.invest,   backgroundColor: dark ? '#31A078' : 'white' }}>
                    <Text style={{  color:dark ? 'white' : '#31A078'}}>Invest now</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.header}>
                <Text style={{fontSize:22,color:dark?'white':'black',fontFamily:'dm-bold'}}>Best Plans</Text>
                <TouchableOpacity>
                    <Text style={{fontSize:18,color:dark? 'white':'#FE555D'}}>See All <Image source={dark ? require('../assets/right-white.png') : require('../assets/right.png')} /></Text>
                    </TouchableOpacity> 
            </View>
            <View style={{height: 170,marginBottom:15}}>
            <ScrollView horizontal={true} style={{padding:0}} centerContent={true} >
                <ImageBackground style={{ ...styles.cardColor ,backgroundColor: '#F0C735',}} source={require('../assets/dollar.png')} >
                    <Text style={styles.cardText}>Gold</Text>
                    <Text style={{fontSize:13,color:'white'}}>30% return</Text>
                  
                </ImageBackground>
                <ImageBackground style={{ ...styles.cardColor,backgroundColor: '#CAC9C9', }} source={require('../assets/euro.png')} >
                    <Text style={styles.cardText}>Silver</Text>
                    <Text style={{fontSize:13,color:'white'}}>60% return</Text>
                  
                </ImageBackground>
                <ImageBackground style={{ ...styles.cardColor ,backgroundColor:'#954DF2'}} source={require('../assets/euro.png')} >
                    <Text style={styles.cardText}>Platinum</Text>
                    <Text style={{fontSize:13,color:'white'}}>90% return</Text>
                  
                </ImageBackground>
                </ScrollView>
                </View>
            <View>
                    <Text style={{ fontSize: 24, fontFamily: 'dm-bold',color:dark ? 'white':'black' }}>Investment Guide</Text>
                    <View style={{ ...styles.investNew , borderBottomColor: dark ? 'white' : 'black',borderBottomWidth:1}}>
                        <View style={{flex:1,marginRight:3}}>
                            <Text style={{ ...styles.newsTitle, color:dark?'white':'black'}} >Basic type of investments</Text>
                            <Text style={{ ...styles.newContent ,color:dark?'white':'black'}}>This is how you set your foot for 2020 Stock market recession.Whats next...</Text>
                        </View>
                            <Image source={require('../assets/ellipse.png')} />
                    </View>
                    <View style={styles.investNew }>
                        <View style={{flex:1,marginRight:3}}>
                            <Text style={{ ...styles.newsTitle, color:dark?'white':'black'}} >Basic type of investments</Text>
                            <Text style={{ ...styles.newContent ,color:dark?'white':'black'}}>This is how you set your foot for 2020 Stock market recession.Whats next...</Text>
                        </View>
                            <Image source={require('../assets/ellipse2.png')} />
                    </View>
                </View> 
                </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
       
        padding: 20,
    },
    header: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        width: '100%',
        marginBottom:15
    },

    headText: {
        fontSize: 34,
        fontFamily: 'dm-bold',
        letterSpacing: -1,
    },
    invest: {
        paddingVertical: 10,
        paddingHorizontal:20,
     
        borderRadius: 20
    },
    code: {
        fontSize: 32,
        color: 'white'
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    card: {
        
        padding: 20,
        borderRadius: 20,
        marginBottom: 20,
         width:'100%'
    },
    cardColor: {
        
        padding: 20,
        borderRadius: 20,
        height: 170,
        width: 134,
        marginRight:10
       
    },
    cardText: {
        fontSize: 17,
        color:'white'
    },
    newsTitle: {
        fontSize: 18,
        fontFamily:'dm-bold'
    },
    newContent: {
        fontSize: 14,
        fontFamily:'sf-pro'
    },
    investNew: {
        display: 'flex',
        paddingVertical:10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
       
    }
})

export default Dashboard;