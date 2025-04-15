import { Text, StyleSheet, View, Image,TouchableOpacity} from 'react-native';

const LargeButtonIcon = (props) => {
    return(
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <Image style={styles.img} source={props.url}></Image>
        <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
    )
}

export default LargeButtonIcon

const styles = StyleSheet.create({
    text:{
        alignContent: 'center',
        fontSize: 16,
        marginTop: 20

    },
    img:{
        marginTop: 20,
    },
    container:{
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        width: 150,
        height: 150
    },
  
});
