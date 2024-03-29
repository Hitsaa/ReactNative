import React from 'react'
import {TouchableOpacity, Text,} from 'react-native';
import {Actions} from 'react-native-router-flux';

const About=() => {
    const goToHome = () => {
        Actions.home()
    }
    const toPop=() => {
        Actions.pop()
    }
    }
    return(
        <TouchableOpacity style = {{margin: 128}} onPress={toPop}>
            <Text>
                This is About
            </Text>
        </TouchableOpacity>
    )
}

export default About;