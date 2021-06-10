import React from 'react'

import Container from '../Core/Container';

import EntrySumaryChart from './EntrySumaryChart';
import EntrySumaryList from './EntrySumaryList';


const EntrySumary = ({onPressActionButton}) => {
    const entriesGrouped = [
        { key: '1', description: 'Alimentação', amount: 200 },
        { key: '2', description: 'Combustível', amount: 12 },
        { key: '3', description: 'Aluguel', amount: 120 },
        { key: '4', description: 'Lazer', amount: 250 },
        { key: '5', description: 'Outros', amount: 1200 },
    ];
    
    return (
        <Container 
            title='Categorias' 
            actionLabelText='Últimos 7 dias' 
            actionButtonText='Ver mais' 
            onPressActionButton={onPressActionButton}>
                
            <EntrySumaryChart />
            <EntrySumaryList entriesGrouped = {entriesGrouped} />
        </Container>
    )
}

export default EntrySumary;