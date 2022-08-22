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
import Bridge from  './pages/bridge';
import Charing from './pages/charing';
import Euston from './pages/euston';
import Gatwick from './pages/gatwick';
import Heathrow from './pages/heathrow';
import King from './pages/king';
import London from './pages/london';
import Luton from './pages/luton';
import Paddington from './pages/paddington';
import Stansted from './pages/stansted';
import Victoria from './pages/victoria';
import Waterloo from './pages/waterloo';

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
      <Route path="/bridge" component={Bridge} />
      <Route path="/charingcross" component={Charing} />
      <Route path="/euston" component={Euston} />
      <Route path="/gatwick" component={Gatwick} />
      <Route path="/heathrow" component={Heathrow} />
      <Route path="/kingcross" component={King} />
      <Route path="/londoncity" component={London} />
      <Route path="/paddington" component={Paddington} />
      <Route path="/stansted" component={Stansted} />
      <Route path="/victoria" component={Victoria} />
      <Route path="/waterloo" component={Waterloo} />
      <Route path="/luton" component={Luton} />
      <Route path="/london" component={London} />

    </Switch>

    </BrowserRouter>
  );
}

export default App;
