import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from './pages/about';
import Contact from './pages/contact';
import Airport from './pages/airport';
import Train from './pages/train';
import Cars from './pages/cars';
import Cabs from './pages/cabs';
import Mini_cabs from './pages/mini_cabs';
import Services from './pages/services';
import './App.css'

function App() {
  return (
    <BrowserRouter>

    <Switch>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/airports" component={Airport} />
      <Route path="/train_stations" component={Train} />
      <Route path="/cars" component={Cars} />
      <Route path="/cabs" component={Cabs} />
      <Route path="/mini_cabs" component={Mini_cabs} />
      <Route path="/services" component={Services} />

    </Switch>

    </BrowserRouter>
  );
}

export default App;
