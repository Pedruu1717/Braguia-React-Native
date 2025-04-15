import { useEffect, useState } from 'react'
import { Text,TouchableOpacity,StyleSheet,View,Image } from 'react-native';
import BraguiaLogo from '../components/BraguiaLogo';
import Toast from 'react-native-toast-message';
import login from '../apis/UserAPI';

const ItemScreen = ({navigation, route}) => {
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
                navigation.navigate('HomePageScreen', {username: username, password: password})
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


    const renderItem = () => {
        if(route.params.context === "trails") {
            let { 
                edges, id,
                rel_trail, trail_desc,
                trail_difficulty, trail_duration,
                trail_img,trail_name,
             } = route.params

            return (
                <>
                <Image style={styles.img} source={{uri:trail_img}}/>
                <View style={styles.titleBox}>
                    <Text style={styles.title}>Rota {trail_name}</Text>
                </View>
                <View style={styles.detailsBox}>
                    <Text>{trail_desc}</Text>
                </View>
                <View style={styles.coordinatesBox}> 
                    <Text>Dificuldade: {trail_difficulty}</Text>
                    <Text>Duração: {trail_duration}</Text>                   
                    <Text>Condições de Acesso: {rel_trail.attrib}</Text>
                </View>
                <TouchableOpacity style={styles.logo} onPress={() => { 
                    navigation.navigate('MapScreen', {edges: edges, name: trail_name,
                        desc: trail_desc, context:"trails"})
                }}>
                    <Image source={require("../assets/open_map.png")} />
                </TouchableOpacity>                    
                </>
            )
        }
        else if(route.params.context === "pins") {
            let { 
                id, rel_pin,  pin_img,
                pin_name,  pin_desc,  pin_lat,        
                pin_lng,    pin_alt,
            } = route.params

            return (
                <>
                <Image style={styles.img} source={{uri:pin_img}}/>
                <View style={styles.titleBox}>
                    <Text style={styles.title}>{pin_name}</Text>
                </View>
                <View style={styles.detailsBox}>
                    <Text>{pin_desc}</Text>
                </View>
                <View style={styles.coordinatesBox}> 
                    <Text>Latitude: {pin_lat}</Text>
                    <Text>Longitude: {pin_lng}</Text>
                    <Text>Altitude: {pin_alt}</Text>
                    <Text>Condições de Acesso: {rel_pin.attrib}</Text>
                </View>
                <TouchableOpacity style={styles.logo} onPress={() => { 
                    navigation.navigate('MapScreen', {lat: pin_lat, lng: pin_lng, name: pin_name,
                        desc: pin_desc, context:"pins"})
                }}>
                    <Image source={require("../assets/open_map.png")} />
                </TouchableOpacity>                    
                </>
            )

        }
    }

    return(
    <View style={styles.container}>
        {renderItem()}
        <View style={styles.logo}>
            <BraguiaLogo></BraguiaLogo>
        </View>
    </View>
    );
};

export default ItemScreen

const styles = StyleSheet.create({
    img: {
        width: "100%",
        height: "90%",
        resizeMode: 'cover',
        borderColor: "black",
        borderWidth: 1,
        flex: 1,        
    },
    titleBox: {
        flex: 0.2,
        alignItems: "center",
    },
    detailsBox: {
        flex: 1,
        marginHorizontal: 10,
        alignItems: "center",
    },
    coordinatesBox: {
        flex: 0.3,
        marginHorizontal: 10,
        alignItems: "center",
    },
    title:{
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 30
    },   
    logo: {
        alignItems:'center',
        marginTop:10,
    },
    container: {
        flex: 1,
        backgroundColor: '#E0DDDD',
    },
});
