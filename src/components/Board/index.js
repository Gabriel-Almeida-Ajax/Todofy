import React from 'react';
import { v4 as uuid } from 'uuid';
import List from '../List';
import { Container } from './styles';

import { useBoard } from '../../hooks/useBoard';

function Board() {
    const { board } = useBoard();

    return (
        <Container key={uuid()}>
            {
                board.map((item, index) => (
                    <List key={item.id} id={index} data={item} />
                ))
            }
        </Container>
    );
}

export default Board;