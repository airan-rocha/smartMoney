import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native'

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/Colors';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function BalancePanel({onNewEntryPress}) {
    const currentBalance = 2064.35
    return (
        <View style={styles.container}>
            <LinearGradient 
                colors={[Colors.violet, Colors.blue]} 
                style={styles.panel}>
                <BalancePanelLabel currentBalance= {currentBalance} />
                <BalancePanelChart />
            </LinearGradient>
            <TouchableOpacity style={styles.button} onPress={onNewEntryPress}>
                <Icon name="add" size={30} color={Colors.white} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    button: {
        backgroundColor: Colors.green,
        borderRadius: 150,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,

        shadowColor: Colors.black,
        elevation: 5,

        marginTop: -25,
        marginRight: 10,
        padding: 0,
    },
    panel: {
       paddingVertical: 10,
    }
});