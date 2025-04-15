import Edge from './Edge';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RelTrail from './RelTrail';

interface TrailProps {
    edges: Edge[]
    id: number
    rel_trail: RelTrail[]
    trail_desc: string
    trail_difficulty: string
    trail_duration: number
    trail_img: string
    trail_name: string
}

export type RootStackParamList = {
  ItemScreen: {
    context: string,
    id: number,
    edges: Edge[]
    rel_trail: RelTrail[]
    trail_desc: string
    trail_difficulty: string
    trail_duration: number
    trail_img: string
    trail_name: string
   } | undefined;
};

const Trail: React.FC<TrailProps> = ({ id, trail_name, trail_img, edges,
  rel_trail, trail_desc, trail_difficulty, trail_duration }) => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onPress = () => {
    let url: string

    if (trail_img.length>0) {
      url = trail_img
    }
    else {
      url = '../assets/img-not-found.png'
    }

    navigation.navigate('ItemScreen', {context: 'trails', id: id,
                        edges: edges,
                        rel_trail: rel_trail,
                        trail_desc: trail_desc,
                        trail_difficulty: trail_difficulty,
                        trail_duration: trail_duration,
                        trail_img: url,
                        trail_name: trail_name 
                        })
  }
  
  return (
    <View style={styles.container} >
      <View style={styles.row}>
        {renderImg(trail_img)}
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text style={styles.text}>{trail_name}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const renderImg = (trail_img: string): JSX.Element => {
  if (trail_img.length>0) {
    return <Image source={{uri: trail_img}} style={styles.img}/>
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
    flex: 3,
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
    height: 70
  }
});

export default Trail
