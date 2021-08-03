import React from 'react'
import { StyleSheet, Text, View, Modal, FlatList, TouchableOpacity } from 'react-native'

import ActionFooter, {ActionPrimaryButton} from '../Core/ActionFooter';

const RelativeDaysModal = ({isVisible, onConfirm, onCancel}) => {
    const relativeDays = [1, 3, 7, 15, 21, 30, 60, 90, 180, 365];

    return (
        <Modal animationType="slide" transparent={false} visible={isVisible}>
            <View>
                <FlatList 
                    data={relativeDays} 
                    keyExtractor={item => item.toString()} 
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => onConfirm(item)}>
                            <Text>{`${item} dias`}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            
            <ActionFooter>
                <ActionPrimaryButton title="Fechar" onPress={onCancel} />
            </ActionFooter>
        </Modal>
    )
}

const styles = StyleSheet.create({})

export default RelativeDaysModal;