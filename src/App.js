import './App.css';
import Header from './comps/home';
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
