import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

export default class Todo extends Component {
    static propTypes = {
        title: PropTypes.string,
    };
    render(){
        return(
            <View>
                <Text>Estudar o GoNative
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});