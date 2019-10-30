import React, { Component, Fragment } from 'react';
import { Text, AsyncStorage, View, Image, StyleSheet } from 'react-native';
import * as jwt_decode from "jwt-decode";

const styles = StyleSheet.create({
    tabBarEstilizacao:
        { width: 25, height: 25, tintColor: 'white' }
})

class Profile extends Component {

    constructor() {
        super();
        this.state = {
            token: "",
            userInfo: []
        }
    }

    static navigationOptions = {
        tabBarIcon: () => (
            <Image
                source={require('../assets/img/profileIcon.png')}
                style={styles.tabBarEstilizacao}
            />
        ),
    };

    componentDidMount() {
        this._getTokenFromStorage();
        
        
        this.setState({ userinfo: jwt_decode(this.state.token) });
        console.warn(this.state.userInfo)
        // console.warn(this.state.userInfo);
    }

    _getTokenFromStorage = async () => {
        try {
            const tokenRecovered = await AsyncStorage.getItem("@gufos:token");
            // console.warn(tokenRecovered);
            this.setState({ token: tokenRecovered })
            // console.warn(this.state.token);
        }
        catch (error) {

        }
    };

    // _decodeToken = async () => {
    //     try {
    //         console.warn(this.state.token);
            
    //     }
    //     catch (Error) {
    //         return null;
    //     }
    // };



    render() {
        return (
            <View>
                <Text> Profile of {this.state.userInfo.map(x => x.email)} </Text>
                <Text>{this.state.token}</Text>
            </View>
        );
    }
}
export default Profile;