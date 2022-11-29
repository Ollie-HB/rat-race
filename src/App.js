import "./App.css";
import IndexPage from "./components/IndexPage/IndexPage.js";
import { useNavigate, Routes, Route } from "react-router-dom";
// import Container from "./components/Container/Container";
import { Loading } from './components/Loading/loading';

function App() {
  return (
    <Routes>
    <Route path="/" element={<IndexPage navigate={useNavigate()} />} />
    <Route path="/game" element={<Loading navigate={useNavigate()} />} />
    {/* <Route path="/game" element={<Container navigate={useNavigate()} />} /> */}
  </Routes>
  );
}

export default App;