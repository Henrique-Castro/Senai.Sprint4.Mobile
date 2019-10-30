import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from './pages/main';
import ProfileScreen from './pages/profile';
import SignInScreen from './pages/signIn';
import CategoriasScreen from './pages/categorias';


const AuthStack = createStackNavigator({
    SignIn: { screen: SignInScreen },
});


const TabBarComponent = props => <BottomTabBar {...props} />;

const MainNavigator = createBottomTabNavigator({
    //'Main' e 'Profile' são rotas criadas e nomeadas nesta função
    Main: { screen: MainScreen, },
    Profile: { screen: ProfileScreen, },
    Categorias: { screen: CategoriasScreen }
},
    {
        initialRouteName: 'Main',
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            activeBackgroundColor: '#9900e6',
            inactiveBackgroundColor: '#b727ff',
            style: {
                width: '100%',
                height: 50
            }
        }
    },
);

export default createAppContainer(createSwitchNavigator(
    //Rotas paralelas
    {
        MainNavigator,
        AuthStack,
    },
    //Rota por onde começa
    {
        initialRouteName: 'AuthStack'
    }
));