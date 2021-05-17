import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
//Set BrowserRouter alias as ReactRouter from react-router-dom
import {BrowserRouter as ReactRouter, Route} from 'react-router-dom'; //Uses HTML history api, pushState, replaceState, 
import { Container } from 'react-bootstrap'// Do destructure call to bring multiple elements
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

function App() {
  return (
   
    <ReactRouter>{/**React.Fragment short declaration */}
      <Header/>
        <main className="py-3"> {/**py-3 adds padding*/}
          <Container>
            <Route path="/" component={HomeScreen} exact/>
            {/**Set a route for the product template. The path will be referred to as /product/:id meanign product/of any id */}
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart" component={CartScreen}/>
          </Container>
        </main>
      <Footer/>
    </ReactRouter>
  );
}

export default App;
