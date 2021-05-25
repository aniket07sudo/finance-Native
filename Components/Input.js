import React from 'react';
import {TextInput ,StyleSheet} from 'react-native';

const Input = (props) => {
    return (
        <TextInput style={{ ...styles.input ,backgroundColor:props.dark ? 'white' : null}} placeholder={props.placeholder} />
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 13,
        width: '100%',
        borderRadius: 20,
        marginBottom: 10,
        borderColor: '#828282',
        borderWidth:1
    }
})

export default Input;