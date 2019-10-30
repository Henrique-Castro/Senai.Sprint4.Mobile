import React, { Component, Fragment } from 'react';
import { StyleSheet , Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
    lista : {
        backgroundColor:'slateblue',
        padding:20,
    },
    itemLista : {
        color:'white',
        fontSize:20,
        borderBottomWidth:1,
        borderBottomColor:'white'
    }
})

class Main extends Component {

    constructor() {
        super();
        this.state = {
            eventos: [], //api
        }
    }

    componentDidMount() {
        this._carregarEventos();
    }

    _carregarEventos = async () => {
        await fetch('http://192.168.7.85:5000/api/eventos')
            .then(resposta => resposta.json())
            .then(data => this.setState({ eventos: data }))
            .catch(erro => console.warn(erro));
    }


    render() {
        return (
            <FlatList data={this.state.eventos}
                keyExtractor={item => item.idEvento.toString()}
                renderItem={({ item }) => (
                    <View style={styles.lista}>
                        <Text style={styles.itemLista}>{item.titulo}</Text>
                    </View>
                )
                } />
        );
    }
}
export default Main;