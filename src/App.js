import './App.css';
import { Header, Home, Market, Wallet, Activities, Earn, Error, Footer } from './components'
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
