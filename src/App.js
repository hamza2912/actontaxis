import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from './pages/about';
import Contact from './pages/contact';
import './App.css'

function App() {
  return (
    <BrowserRouter>

    <Switch>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />

    </Switch>

    </BrowserRouter>
  );
}

export default App;
