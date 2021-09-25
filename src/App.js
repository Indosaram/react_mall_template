import "./App.css";
import Header from "./components/Header";
import Items from "./components/Items";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/main">
            <Items category="main" />
          </Route>
          <Route path="/mobile">
            <Items category="mobile" />
          </Route>
          <Route path="/laptop">
            <Items category="laptop" />
          </Route>
          <Route path="/watch">
            <Items category="watch" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
