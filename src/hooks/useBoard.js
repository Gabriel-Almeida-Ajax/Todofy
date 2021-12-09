import React, { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { loadLists } from '../services/api';

const BoardContext = createContext();

const list = loadLists();

export default function BoardProvider({ children }) {
    const [board, setBoard] = useState([]);

    const remove = useCallback((id, index) => {
        const filtred = board.map((list, _index) => {
            if (_index === index) {
                let cards = list.cards.filter(card => {
                    return card.id !== id;
                });

                return {
                    ...list,
                    cards
                }
            }
            return list
        });

        setBoard(filtred);
    }, [board])

    const add = useCallback((card, id) => {
        const copy = [...board];

        copy[id].cards.push(card);

        setBoard(copy);
    }, [board])


    useEffect(() => {
        setBoard(list);
    }, []);

    const provider = {
        board,
        remove,
        add,
    };

    return (
        <BoardContext.Provider value={provider}>
            {children}
        </BoardContext.Provider>
    )
}

export const useBoard = () => {
    return useContext(BoardContext);
}