import React, {useState} from 'react'
import { StyleSheet, TextInput, View, Button, Alert } from 'react-native';

import BalanceLabel from '../../componentes/BalanceLabel';

import {deleteEntry, saveEntry} from '../../services/Entries';
import Colors from '../../styles/Colors';
import NewEntryInput from './NewEntryInput';

export default function NewEntry({navigation}) {

    const entry = navigation.getParam('entry', {
        id: null,
        amount: '0.00',
        entryAt: new Date(),
    });

    const [amount, setAmount] = useState(entry.amount);

    const isValid = () => {
        if(parseFloat(amount) !== 0){
            return true;
        }else{
            {/** meu código ---> */}Alert.alert('Ops...', `Valor não definido!\nO valor do campo deve ser diferente de R$ ${amount}`);
            return false;
        }
    };

    const onSave = () => {
        const data = {
            id: entry.id,
            amount: parseFloat(amount),
        }
        console.log('NewEntry :: save', data)
        saveEntry(data, entry);
        onClose();
    }

    const onDelete = () => {
        deleteEntry(entry);
        onClose();
    }

    const onClose = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <BalanceLabel/>
            
            <View>
                <NewEntryInput value={amount} onChangeValue={setAmount} />
                <TextInput style={styles.imput} />
                <Button title="GPS" />
                <Button title="CAMERA" />
            </View>

            <View>
                <Button title="Adicionar" onPress={() => {
                    isValid() && onSave();
                }} />
                <Button title="Excluir" onPress={onDelete} />
                <Button title="Cancelar" onPress={onClose} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 10,
    },
    imput: {
        borderColor: '#000',
        borderWidth: 1,
    },
});
