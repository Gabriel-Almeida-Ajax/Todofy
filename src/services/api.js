import {v4 as uuid} from 'uuid';

export function loadLists() {
    return [
      { 
        id: uuid(),
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: uuid(),
            content: 'Estudar módulo 03 de React Native',
            labels: ['#7159c1'],
            user: 'https://miro.medium.com/max/285/1*EelUYA6BOTNXtuRjSlaqHw.png'
          },
          {
            id: uuid(),
            content: 'NextJS: Utilizando server-side rendering com ReactJS',
            labels: ['#54e1f7'],
            user: 'https://miro.medium.com/max/285/1*EelUYA6BOTNXtuRjSlaqHw.png'
          },
          {
            id: uuid(),
            content: 'Deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://miro.medium.com/max/285/1*EelUYA6BOTNXtuRjSlaqHw.png'
          },
        ]
      },
      { 
        id: uuid(),
        title: 'Fazendo', 
        creatable: false,
        cards: [
          {
            id: uuid(),
            content: 'To do List',
            labels: [],
            user: 'https://miro.medium.com/max/285/1*EelUYA6BOTNXtuRjSlaqHw.png'
          },
          {
            id: uuid(),
            content: 'Tomar café',
            labels: ['#ffa800'],
            user: 'https://miro.medium.com/max/285/1*EelUYA6BOTNXtuRjSlaqHw.png'

          }
        ]
      },
      { 
        id: uuid(),
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: uuid(),
            content: 'Geolocalização e mapas com React Native',
            labels: ['#7159c1'],
            user: 'https://miro.medium.com/max/285/1*EelUYA6BOTNXtuRjSlaqHw.png'
          },
          {
            id: uuid(),
            content: 'Deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://miro.medium.com/max/285/1*EelUYA6BOTNXtuRjSlaqHw.png'
          },
          {
            id: uuid(),
            content: 'Aprender unform',
            labels: [],
          }
        ]
      },
      { 
        id: uuid(),
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: uuid(),
            content: 'Deploy e CI com React Native',
            labels: [],
          },
          {
            id: uuid(),
            content: 'Testes e deploy ReactJS',
            labels: ['#54e1f7'],
          }
        ]
      },
    ];
  }