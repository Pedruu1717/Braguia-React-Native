import { StyleSheet, View, ImageBackground, TouchableOpacity, Text} from 'react-native';
import BraguiaLogo from './../components/BraguiaLogo';

const WelcomePageScreen = ({navigation}) => {
    const onPress = () => {
        navigation.navigate('Login')
    }

    return(
        <View style={ styles.container }>
            <ImageBackground source={require('./../assets/braga_welcomepage.jpg')} style={styles.backgroundImage}>
                <View style={styles.logo}>
                    <BraguiaLogo fontSize={30}></BraguiaLogo>
                </View>
                    <TouchableOpacity onPress={onPress} style={styles.button}>
                        <Text style={styles.buttonText}>Começar</Text>
                    </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

export default WelcomePageScreen

const styles = StyleSheet.create({
    logo: {
        top: 50,
        flex:1,
        alignItems:'center',
    },
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    button: {
        backgroundColor: "black",
        padding:5,
        marginLeft: 160,
        marginRight: 160,
        borderRadius: 10,
        alignItems:'center',
        bottom: 150,
    },
    buttonText: {
        color: "white"
    }
});
