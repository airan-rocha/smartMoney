import {getRealm} from './Realm';

import _ from 'lodash'
import moment from '../vendors/moment';

export const getBalance = async (untilDays = 0) => {
    const realm = await getRealm();

    let entries = realm.objects('Entry');

    if(untilDays > 0){
        const date = moment().subtract(untilDays, 'days').toDate();

        entries.filtered('entryAt < $0', date);
    }

    return entries.sum('amount');
};

export const getBalanceSumByDate = async days => {
    const realm = await getRealm();

    const startBalance = await getBalance(days) || 0;

    let entries = realm.objects('Entry');

    if(days > 0){
        const date = moment()
        .subtract(days, 'days')
        .toDate();

        entries = entries.filtered('entryAt >= $0', date);
    }

    entries = entries.sorted('entryAt');

    entries = _(entries)
    .groupBy(({entryAt}) => moment(entryAt).format('YYYYMMDD'))
    .map(entry => _.sumBy(entry, 'amount'))
    .map((amount, index, collection) => {
        return (
            (index === 0 ? startBalance : 0) +
            _.sum(_.slice(collection, 0, index)) + 
            amount
        );
    });

    console.log("\n\n getBalanceSumByDate() --->");
    console.log(JSON.stringify(entries));

    return entries;
};

// Salario 1000 - 19/11
// Aluguel -900 - 19/11
//----------------------
// Saldo 100

  //Transposição do saldo
  // D -8 = saldo do dia
  // D -7 = saldo do dia + D -8
  // D -6 = saldo do dia + D -7
  // D -5 = saldo do dia + D -6
  // D -4 = saldo do dia + D -5
  // D -3 = saldo do dia + D -4
  // D -2 = saldo do dia + D -3
  // D -1 = saldo do dia + D -2