import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'


const Count = ({inicial, countValue}) => {
    const [resulado, setResultado] = useState(inicial);

    const soma = () => {
        setResultado(resulado + countValue);
    }

    const sub = () => {
        setResultado(resulado - countValue);
    }

    const mult = () => {
        setResultado(resulado * countValue);
    }

    const div = () => {
        setResultado(resulado / countValue);
    }

    const zerar = () => setResultado(0);

    return(
        <View>
            <Text style={styles.label}>{resulado}</Text>
            <Button title={'Somar +' + countValue} onPress={() => soma()} />
            <Button title={'Subtrair -' + countValue} onPress={() => sub()} />
            <Button title={'Multiplicar *' + countValue} onPress={() => mult()} />
            <Button title={'Dividir /' + countValue} onPress={() => div()} />
            <Button title='Zerar' onPress={() => zerar()} />
        </View>
    )
}

const Contador = () => {
    const [contador, setContador] = useState(0);
    var cc = 0;
    
    const count = () => {
        setContador(contador => contador + 1);
    }

    useEffect(() => {
        setInterval(() => {
            count();
        }, 10000);
    }, [])

    return(
        <View>
            <Text style={{fontSize: 30, textAlign: 'center'}}>{contador}</Text>
            <Button title='contar' onPress={()=> count()} />
        </View>
    )
}

const Timmer = () => {
    var min = 0;
    var seg = 0;
    var ms = 0

    var [time, setTime] = useState('hora');

    const adMinuto = () => {
        min++;
        seg = 0;
    }

    const adSegundo = () => {
        seg = seg + 1;
        ms = 0;
    }

    const adMils = () => {
        ms++;
    }

    const contador = () => {
        if(ms < 9){
            ms++;
        }else if (seg < 59){
            adSegundo();
        }
        else{
            adMinuto();
        }
        console.log(`Min ${min} - Seg ${seg} - Ms ${ms}`);
    }

    /*setInterval(() => {
        contador();
    }, (1000/10));*/

    
    return(
        <View>
            <Text>{time}</Text>
            <Button title='contador' onPress={ () => contador() } />
        </View>
    )
}

const Main = () => {
    return (
        <View style={styles.container}>
            {/*<Count inicial={0} countValue={12} />*/}
            <Timmer />
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginVertical: 50,
    },
    label: {
        marginBottom: 20,
        textAlign: 'center',
    }
})
