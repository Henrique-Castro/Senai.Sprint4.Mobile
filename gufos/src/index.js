import MainScreen from './pages/main';
import ProfileScreen from './pages/profile';
import { StyleSheet} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

const styles = StyleSheet.create({
    
})




const MainNavigator = createBottomTabNavigator({
    //'Main' e 'Profile' são rotas criadas e nomeadas nesta função
    Main: {screen : MainScreen,},
    Profile: {screen : ProfileScreen,},
    // tabBarOptions:{
    //     style:{
    //         backgroundColor: 'black'
    //     }
    // }
});

export default createAppContainer(MainNavigator);