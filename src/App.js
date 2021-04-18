import './App.css';
import Header from '../src/components/Header/header'
import Home from '../src/components/Pages/Home'
import Footer from '../src/components/Footer/footer'
import Activities from './components/Pages/activity'
import Earn from './components/Pages/earn'
import Market from './components/Pages/market'
import Wallet from './components/Pages/wallet'
import Error from './components/Pages/Error'
import { Switch, Route } from 'react-router';

function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route path = '/' component = {Home} exact />
          <Route path = '/earn' component = {Earn} />
          <Route path = '/wallet' component = {Wallet} />
          <Route path = '/market' component = {Market} />
          <Route path = '/activities' component = {Activities} />
          <Route component={Error} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
