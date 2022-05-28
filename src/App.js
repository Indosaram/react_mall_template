import "./App.css";
import Header from "./components/Header";
import Items from "./components/Items";
import MyPage from "./components/MyPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Items />} />
          <Route path="/mobile" element={<Items category="mobile" />} />
          <Route path="/laptop" element={<Items category="laptop" />} />
          <Route path="/watch" element={<Items category="watch" />} />
          <Route path="/mypage" element={<MyPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
