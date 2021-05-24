import React from 'react';
import { Text, View, FlatList, StyleSheet, Button } from 'react-native';

const EntrySumaryList= ({entriesGrouped}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={entriesGrouped}
                renderItem={({item}) => (
                    <Text style={styles.entry}>
                        - {item.description} - ${item.amount}
                    </Text>
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
    },
    entry: {

    }
})

export default EntrySumaryList;