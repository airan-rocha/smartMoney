import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, Button, View, FlatList, TouchableOpacity } from 'react-native'

import Container from '../Core/Container';
import EntryListItem from './EntryListItem';

import {getEntries} from '../../services/Entries';

const EntryList = ({ onEntryPress, onPressActionButton }) => {
    [entries, setEntries] = useState([]);
    
    useEffect(() => {
        async function loadEntries() {
            const data = await getEntries();
            setEntries(data);
        }

        loadEntries();

        console.log('EntryList :: useEffect');
    }, []);

    return (
        <Container
            title='Últimos lançamentos'
            actionLabelText='Últimos 7 dias'
            actionButtonText='Ver mais'
            onPressActionButton={onPressActionButton}
            >
            
            <FlatList
                data={entries}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => (
                    <View>
                        <EntryListItem 
                            entry = {item} 
                            isFirstItem={index === 0} 
                            isLastItem={index === entries.length - 1} 
                            onEntryPress={onEntryPress}/>
                    </View>
                )}
            />
        </Container>
    )
}

const styles = StyleSheet.create({});

export default EntryList;