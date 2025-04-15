import React from 'react';
import {Image, Text} from 'react-native'

const BraguiaLogo = (props) => {
    return (
        <>
            <Image source={require("../assets/location.png")}></Image>
            <Text style={{fontSize: props.fontSize}}>Braguia</Text>
        </>
    );
};

export default BraguiaLogo
