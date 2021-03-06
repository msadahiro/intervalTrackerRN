import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


// Components
import Header from '../Common/Header';
import List from '../Common/List';

class HomePage extends Component {

    static navigationOptions = {
        title: 'Home',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Header />
                <List />
                <Button
                    title="Create New Workout"
                    color="violet"
                    onPress={() => navigate('Create')}
                />
            </View>
        )
    }
}

export default HomePage;