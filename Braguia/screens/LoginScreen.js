import { useEffect, useState } from 'react'
import { TextInput,Text,TouchableOpacity,StyleSheet,View, Button } from 'react-native';
import BraguiaLogo from '../components/BraguiaLogo';
import Toast from 'react-native-toast-message';
import login from '../apis/UserAPI';

const LoginScreen = ({navigation}) => {
    const [username, onChangeUsername] = useState('premium_user');
    const [password, onChangePassword] = useState('paiduser');

    useEffect(() => {
        console.log('Username or password changed:', username, password);
    }, [username,password])

    const onSubmit = () => {
        if(username!='' && password!='') {
            if(login(username, password)) {
                Toast.show({
                    type: 'success', // success, error, info, or any custom type
                    text1: 'Login efetuado com sucesso',
                });
                navigation.navigate('HomePageScreen')
            } else {
                Toast.show({
                    type: 'error', // success, error, info, or any custom type
                    text1: 'Username ou password errados',
                });
            }

        } else {
            Toast.show({
                type: 'error', // success, error, info, or any custom type
                text1: 'O username ou password não podem estar vazios',
              });   
        }
    }

    return(
    <View style={styles.container}>
        <Toast ref={(ref) => Toast.setRef(ref)} />
        <View style={styles.login_container}>
            <Text style={styles.title}>Login</Text>
            
            <Text style={styles.label}>Username</Text>
            <View style={styles.input}>
            <TextInput placeholder='premium_user' value={username} onChangeText={onChangeUsername} styles={styles.input}/>
            </View>

            <Text style={styles.label}>Password</Text>
            <View style={styles.input}>
            <TextInput placeholder='paiduser' value={password} onChangeText={onChangePassword} secureTextEntry styles={[styles.input, styles.messageInput]}/>
            </View>

            <Button title="Login" onPress={onSubmit} styles={styles.button} />
    
        </View>

        <View style={styles.logo}>
            <BraguiaLogo></BraguiaLogo>
        </View>
    </View>
    );
};

export default LoginScreen

const styles = StyleSheet.create({
    login_container:{
        borderRadius: 10,
        top:300,
        height: 300,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#e5e5e5',
    },
    title:{
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 30
    },
    label:{
        marginLeft:10,
        marginTop: 10,
        fontSize: 18,
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        margin: 10,
        marginLeft:10,
        marginRight:10,
        backgroundColor: 'white',
        borderColor: 'transparent'
    },
    messageInput: {
        height: 100,
    },
    logo: {
        marginTop: 420,
        alignItems:'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#E0DDDD'
    },
    button: {
        alignItems: 'center',
        color: "white"
    }
});
