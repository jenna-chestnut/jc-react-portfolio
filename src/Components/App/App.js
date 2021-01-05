import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from '../../Routes/AboutPage/AboutPage';
import ContactPage from '../../Routes/ContactPage/ContactPage';
import HomePage from '../../Routes/HomePage/HomePage';
import PortfolioPage from '../../Routes/PortfolioPage/PortfolioPage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

class App extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
  return (
    <div className="App">

    {this.state.hasError && <p className='error-banner'>Sorry, there was an error. Please refresh the page and try again</p>}

      <Route path='/' component={Header} />

      <Main>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/portfolio' component={PortfolioPage} />
      <Route path='/contact' component={ContactPage} />
      </Switch>
      </Main>

      <Footer />
    </div>
  );
  }
}

export default App;
