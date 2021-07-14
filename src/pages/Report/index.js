import React from 'react';
import {View, Picker, StyleSheet, ScrollView, LogBox} from 'react-native';

import ActionFooter, {ActionPrimaryButton} from '../../components/Core/ActionFooter';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import Colors from '../../styles/Colors';

const Report = ({navigation}) => {
  LogBox.ignoreLogs(['Picker']);
  return (
    <View style={styles.container}>
      <BalanceLabel />
      <View>
        <Picker>
          <Picker.Item label="Todas Categorias" />
        </Picker>
        <Picker>
          <Picker.Item label="Últimos 7 dias" />
        </Picker>
      </View>

      <ScrollView>
        <EntrySummary />
        <EntryList />
      </ScrollView>

      <ActionFooter>
          <ActionPrimaryButton
            title='Fechar'
            onPress={() => {
              navigation.goBack();
            }}
          />
        </ActionFooter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default Report;
