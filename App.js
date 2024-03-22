import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { Component } from 'react';

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state = { txt: '',}
  }

  render()
  {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Tasca1 hola món</Text>

            <TextInput 
                style={styles.input} 
                onChangeText={(txt) => this.setState({txt})}>
            </TextInput>

            <Text style={styles.text} >El text: {this.state.txt}</Text>

            <StatusBar style="auto" />
        </View>
        );
    }
}

const styles = StyleSheet.create(
{
    container:
    {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text:
    {
        color: 'salmon',
        backgroundColor: 'green',
        fontSize: 20,
        padding: 10,
        fontFamily: 'monospace'
    },

    input:
    {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: ""
    }
});

export default App;