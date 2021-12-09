import React from 'react';
import { useDrag } from 'react-dnd';
import { Container, Label } from './styles';
import { useBoard } from '../../hooks/useBoard';

function Card({ data, id }) {
  const { remove } = useBoard();

  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: 'CARD',
      item: { data },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        if (monitor.didDrop()) {
          const { data } = item;
          remove(data.id, id);
        }
      }
    }),
    []
  )

  return (
    <Container key={data.id} ref={dragRef} isDragging={isDragging}>
      <header>
        {data.labels.map(label => <Label key={label} color={label} />)}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="" />}
    </Container>
  );
}

export default Card;