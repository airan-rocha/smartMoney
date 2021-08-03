import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, ScrollView, LogBox} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import ActionFooter, {ActionPrimaryButton} from '../../components/Core/ActionFooter';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import RelativeDaysModal from '../../components/RelativeDaysModal';

import Colors from '../../styles/Colors';

const Report = ({navigation}) => {
  const [relativeDaysModalVisible, setRelativeDaysModalVisible] = useState(false)

  LogBox.ignoreLogs(['Picker']);
  return (
    <View style={styles.container}>
      <BalanceLabel />
      <View>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => {
            setRelativeDaysModalVisible(true);
          }}
          >
          <Text style={styles.filterButtonText}>Últimos 7 dias</Text>
          <Icon
            name="keyboard-arrow-down"
            size={20}
            color={Colors.champagneDark}
          />
        </TouchableOpacity>
        <RelativeDaysModal isVisible={relativeDaysModalVisible} />
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
  filterButton: {
    flexDirection: 'row',
    borderColor: Colors.champagneDark,
    borderWidth: 1,
    borderRadius: 150,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  filterButtonText: {
    color: Colors.champagneDark,

  },
});

export default Report;
