import './App.css';
import Board from './components/board/Board.js'
import IndexPage from './components/indexpage/indexpage.js'
import { useNavigate, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage navigate={useNavigate()} />} />
    </Routes>
  );
};

export default App;


