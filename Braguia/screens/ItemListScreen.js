import { Text, StyleSheet, ScrollView, } from 'react-native';
import { Component } from 'react';
import getTrails from '../apis/TrailAPI';
import getPins from '../apis/PinAPI';
import Trail from "../models/Trail";
import Pin from "../models/Pin";

class ItemListScreen extends Component {
    constructor(props) {
        super(props);
        const {navigation, route} = props;
        this.state = {
            data: null,
            isLoading: true,
            context: route.params.context
        };
    }

    componentDidMount() { 
        if(this.state.context === 'trails') {
            getTrails()
                .then((response) => {
                    this.setState({
                        data: response.data,
                        isLoading: false
                    }); }
                )
        }
        else if(this.state.context === 'pins') {
            getPins()
                .then((response) => {
                    this.setState({
                        data: response.data,
                        isLoading: false
                    }); }
                )
        }               
    }

    renderItems = () => { 
        var { data, isLoading, context } = this.state;
        if(!isLoading) {
            return (
                data.map((item) => {
                    if(context === 'trails') {
                        return(
                            <Trail key={item.id}
                            id={item.id}
                            trail_name={item.trail_name}
                            trail_img={item.trail_img}
                            edges={item.edges}
                            trail_desc={item.trail_desc}
                            trail_difficulty={item.trail_difficulty}
                            trail_duration={item.trail_duration}
                            rel_trail={item.rel_trail}
                            />
                        )
                    }
                    else if(context === 'pins') {
                        return(
                            <Pin key={item.id}
                            id={item.id}
                            pin_name={item.pin_name}
                            media={item.media}
                            rel_pin={item.rel_pin}
                            pin_desc={item.pin_desc}
                            pin_lat={item.pin_lat}
                            pin_alt={item.pin_alt}
                            pin_lng={item.pin_lng}
                            />
                        )
                    }
                })
            )
        }
    }
    
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>{this.state.context}</Text>                
                {this.renderItems()}                   
            </ScrollView>            
        )
    }
}

export default ItemListScreen;

const styles = StyleSheet.create({
    title: {
        alignContent: 'center',
        top: 50,
        left: 170,
        marginBottom:80,
        fontSize:30
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
   
})
