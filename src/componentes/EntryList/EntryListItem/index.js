import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Svg, {Circle, Rect} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

// y = distancia do teto - 0 = teto / 50 = base
// height = distancia da base - 0 = base / 50 = topo

export default function EntryListItem({entry, isFirstItem, isLastItem, onEntryPress}) {
    const bulletLineY = isFirstItem ? 25 : 0;
    const bulletLineHeight = isLastItem ? 25 : 50;
    const showBulletLine = !(isFirstItem && isLastItem);
    //const bulletColor = entry.category.color || Colors.white;
    const bulletColor = Colors.white;

    return (
        <TouchableOpacity 
            onPress={() => {
                onEntryPress && onEntryPress(entry);
            }}>
            <View style={styles.container}>
                <View style={styles.bullet}>
                    <Svg height="50" width="30">
                        {showBulletLine &&(
                            <Rect 
                                x="9"
                                y={bulletLineY}
                                width="1.5"
                                height={bulletLineHeight}
                                fill={Colors.background}
                            />
                        )}

                        <Circle
                            cx="10"
                            cy="25"
                            r="8"
                            stroke={Colors.background}
                            strokeWidth="1.5"
                            fill={bulletColor}
                        />
                    </Svg>
                </View>

                <View style={styles.description}>
                    <Text style={styles.descriptionText}>{entry.description}</Text>
                    
                    <View style={styles.details}>
                        <Icon style={styles.entryAtIcon} name="access-time" size={12} />
                        <Text style={styles.entryAtText}>{entry.entryAt.toString()}</Text>
                        
                        {entry.address && (
                            <>
                                <Icon style={styles.addressIcon} name="person-pin" size={12} />
                                <Text style={styles.addressText}>{entry.address}</Text>
                            </>
                        )}
                    </View>
                </View>

                <View style={styles.amount}>
                    <Text style={styles.amountText}>${entry.amount}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    entry: {},
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    bullet: {},
    description: {
        flex: 1,
        justifyContent: 'center',
    },
    details: {
        flexDirection: 'row',
    },
    entryAtIcon: {
        color: Colors.metal,
        marginTop: 2,
        marginRight: 2,
    },
    entryAtText: {
        fontSize: 12,
        color: Colors.metal,
    },
    addressIcon: {
        color: Colors.metal,
        marginTop: 2,
        marginRight: 2,
        marginLeft: 5,
    },
    addressText: {
        fontSize: 12,
        color: Colors.metal,
    },
    descriptionText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.white,
    },
    amount: {
        justifyContent: 'center',
    },
    amountText: {
        fontSize: 14,
        color: Colors.white,
    },
});