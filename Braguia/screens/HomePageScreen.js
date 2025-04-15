import LargeButtonIcon from "../components/LargeButtonIcon";
import { Text, StyleSheet, View,  Image } from 'react-native';
import BraguiaLogo from '../components/BraguiaLogo';

const HomePageScreen = ({navigation})   =>  {
    const onTrails= () => { navigation.navigate('ItemListScreen', {context: 'trails'}) }
    const onPins= () => { navigation.navigate('ItemListScreen', {context: 'pins'}) }

    return(
        <View style={styles.container}>
            <View style={styles.row3}>
                <Text style={styles.title}>Bem vindo!</Text>
                <Image source={require('./../assets/emmergency.png')} style={styles.emmergencyBtn}/>
                <Image style={styles.icon} source={require('./../assets/person_icon.png')}></Image>
            </View>

            <View style={styles.row}>
                <View style={styles.btnContainer1}>
                    <LargeButtonIcon onPress={onTrails} text="Roteiros" url={require("../assets/map_icon.png")}/>
                </View>
                <View style={styles.btnContainer1}>
                    <LargeButtonIcon onPress={onPins} text="Pontos de Interesse" url={require("../assets/pin_icon.png")}/>
                </View>
            </View>

            <View style={styles.row2}>
                <View style={styles.btnContainer1}>
                    <LargeButtonIcon text="Galeria" url={require("../assets/pic_icon.png")}/>
                </View>
                <View style={styles.btnContainer1}>
                    <LargeButtonIcon text="Histórico" url={require("../assets/clock_icon.png")}/>
                </View>
            </View>

            <Image source={require('./../assets/braga_prev_ui_1.png')} style={styles.backgroundImage}/>
            
            <View style={styles.logo}>
                <BraguiaLogo/>
            </View>          
        </View>
    );
}



export default HomePageScreen;

const styles = StyleSheet.create({
    icon:{
        marginLeft: 10,
        marginTop: 10,
        fontSize: 30
    },
    title:{
        marginLeft: 40,
        marginTop: 10,
        fontSize: 30
    },
    row: {
        flex: 4,
        flexDirection: "row",
        marginTop:80,

      },
    row2: {
        flex: 4,
        flexDirection: "row",
        marginTop:20
      },
    row3: {
        flex:1,
        flexDirection: "row",
        marginTop:120,
      },
    container:{
        flex:1
    },
    btnContainer1:{
        marginLeft: 40,
    },
    backgroundImage: {
        resizeMode: 'stretch', 
        width:'100%',
        flex:5
    },
    emmergencyBtn: {
        width:'11%',
        height:'100%',
        marginLeft:100,
        marginRight:10
    },
    logo: {
        marginTop:720,
        position: 'absolute',
        alignItems:'center',
        marginLeft:165
    },
   
});
