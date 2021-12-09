import React from 'react';

import { MdAdd } from 'react-icons/md';
import { Container } from './styles';

import Card from '../Card';
import { useDrop } from 'react-dnd';
import { useBoard } from '../../hooks/useBoard';

// FIXME: When dropping the card on the same list it removes the card from the list, and does not return it;

function List({ data, id}) {
  const { add } = useBoard();

  const [, drop] = useDrop(() => ({
    accept: 'CARD',
    drop: ({ data: card }) => {
      add(card, id);
    },
  }))


  return (
    <Container ref={drop} done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && <button type='button'>
          <MdAdd size={24} color='#fff' />
        </button>}
      </header>

      <ul>
        {data.cards.map(card => (
          <Card key={card.id} id={id} data={card} />
        ))}
      </ul>
    </Container>
  );
}

export default List;