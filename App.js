/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Image,
    AppRegistry, TextInput,
    StyleSheet,
    Button,Alert,
    Text,
    View
} from 'react-native';


import Toast from 'react-native-simple-toast';


export default class Apps extends Component {

    _submitForm = () => {
          const { Username,passwords } = this.state

  
    
          if(this.state.Username.length==0)
            {
                Toast.show("Please enter your username");
            }
            else if(this.state.passwords.length==0)
                {
                Toast.show("Please enter your Password");
                    
                }
            else{

                Alert.alert(
"Login Succeffully")
            }
}
    constructor(props) {
        super(props)
        this.state = {


            Username: '',
            passwords: '',
        }

    }
    onsubmit() {

    }
    render() {
        return (
            <View style={styles.container}>
                
                <View>


                   <Text style={{fontSize:15,color:'#404040',margin:25}}>Login</Text>
                    </View>
                <View style={{ flex: 1,justifyContent:'center' }}>
                    <Image style={{ width: 100, height: 100, alignSelf: 'center' }} source={require('./reacts.png')} />


                    <TextInput underlineColorAndroid={'transparent'}
                        placeholder="UserName"
                        style={styles.TextInputs}
                        fontsize={12}
                        onChangeText={(Username) => this.setState({ Username })}
                        value={this.state.Username}
                    />
                    <TextInput underlineColorAndroid={'transparent'}
                        placeholder="Password"
                        secureTextEntry={true}
                        style={styles.TextInputs}
                        fontsize={12}
                        onChangeText={(passwords) => this.setState({ passwords })}
                        value={this.state.passwords}
                    />
                    <View  style={{marginTop:10}}>
                        <Button style={{ width: 250, height: 35, marginTop: 30 }}
                            onPress={this._submitForm}
                            title="Login"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    TextInputs:
    {
        height: 35,
        width: 250,
        borderColor: 'gray',
        borderWidth: 1.5,
        padding: 10,
        borderRadius: 16,
        marginTop: 10,
        backgroundColor: '#F0F0F0'

    },
});

module.export = Apps;
