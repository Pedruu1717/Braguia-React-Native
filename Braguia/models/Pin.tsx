import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Media from './Media';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RelPin from './RelPin'

interface PinProps {
    id: number
    rel_pin: RelPin[]
    media: Media[]
    pin_name: string
    pin_desc: string
    pin_lat: number
    pin_lng: number
    pin_alt: number
}

export type RootStackParamList = {
  ItemScreen: { 
    context: string,
    id: number,
    rel_pin: RelPin[]
    pin_img: string
    pin_name: string
    pin_desc: string
    pin_lat: number
    pin_lng: number
    pin_alt: number
   } | undefined;
};

const Pin: React.FC<PinProps> = ({id, pin_name, media, rel_pin,
  pin_desc, pin_lat, pin_lng, pin_alt }) => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onPress = () => {
    let url: string

    if (media.length>0) {
      url = media[0].media_file
    }
    else {
      url = '../assets/img-not-found.png'
    }    
    
    navigation.navigate('ItemScreen', {context: 'pins', id: id,
                        rel_pin: rel_pin,
                        pin_img: url,
                        pin_name: pin_name,
                        pin_desc: pin_desc,
                        pin_lat: pin_lat,
                        pin_lng: pin_lng,
                        pin_alt: pin_alt,
                        })
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {renderImg(media)}
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text style={styles.text}>{pin_name}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const renderImg = (media: Media[]): JSX.Element => {
  if (media.length>0) {
    return <Image source={{uri: media[0].media_file}} style={styles.img}/>
  }
  else {
    return <Image source={require('../assets/img-not-found.png')} style={styles.img}/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: "row",
    marginHorizontal:10,
    marginVertical:10,
    borderRadius: 10,
    borderVisible: true,
    borderColor: "black",
    borderWidth: 1,
    flex:1,
  },
  img: {
    width: "100%",
    height: "90%",
    resizeMode: 'cover',
    borderColor: "black",
    borderWidth: 1,
    flex: 3.5,
    margin:10
  },
  text: {
    color: "white",
  },
  btn: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#000000',
    paddingHorizontal:20,
    paddingVertical:10,
    margin: 20,
    height: 70,
  }
});

export default Pin
