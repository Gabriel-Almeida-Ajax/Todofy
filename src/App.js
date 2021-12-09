import GlobalStyle from './styles/global.style';
import { Header } from './components/Header';
import Board from './components/Board';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BoardProvider from './hooks/useBoard';


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <BoardProvider>
        <Header />
        <Board />
        <GlobalStyle />
      </BoardProvider>
    </DndProvider>
  );
}

export default App;
