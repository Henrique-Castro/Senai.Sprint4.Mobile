import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    tabBarEstilizacao:
        { width: 25, height: 25, tintColor: 'white' }
})

export default class Categorias extends Component {

    static navigationOptions = {
        tabBarIcon: () => (
            <Image
                source={require('../assets/img/categoriasIcon.jpg')}
                style={styles.tabBarEstilizacao}
            />
        ),
    };

    constructor() {
        super();
        this.state = {
            lista: [],
        }
    }



    componentDidMount() {
        this._listarCategorias();
    }

    _listarCategorias = async () => {
        await fetch('http://192.168.7.85:5000/api/Categorias')
            .then(response => response.json())
            .then(data => this.setState({ lista: data }))
            .catch(error => console.warn(error))
    }

    render() {
        return (
            <View>
                <Text>Categorias</Text>
                <FlatList
                    data={this.state.lista}
                    keyExtractor={item => item.idCategoria.toString()}
                    renderItem={({ item }) =>
                        (
                            <View>
                                <Text>{item.idCategoria}</Text>
                                <Text>{item.nome}</Text>
                                <Text>{item.Meetup}</Text>
                            </View>
                        )
                    }
                />
            </View>
        );
    }
}