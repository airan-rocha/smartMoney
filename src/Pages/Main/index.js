import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

import BalancePanel from '../../componentes/BalancePanel';
import EntrySumary from '../../componentes/EntrySumary';
import EntryList from '../../componentes/EntryList';

import Colors from '../../styles/Colors';


const Main = ({ navigation }) => {
    const currentBalance = 2064.35;

    return ( 
        <View style = { styles.container } >
            <BalancePanel onNewEntryPress = {() => navigation.navigate('NewEntry')}/>
            <EntrySumary 
                onPressActionButton={() => navigation.navigate('Report')}
            />
            <EntryList onEntryPress={entry => navigation.navigate('NewEntry', {
                        entry: entry,
                    })
                }
                onPressActionButton={() => navigation.navigate('Report')}
            />
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
});

export default Main;
