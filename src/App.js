import './App.css';
import Layout from './containers/Layout/Layout';
import About from './components/About/About';
import Dashboard from './containers/Dashboard/Dashboard';
import Products from './components/Products/Products';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './containers/ProductDatail/ProductDetail';
import Cart from './containers/Cart/Cart';
import {Route, Switch} from 'react-router-dom';

function App() {
    return(
        <div>
            <Layout>
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/products" component={Products} />
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/product/:productId" component={ProductDetail}/>
                    <Route path="/cart" component={Cart} />
                    <Route path="*" component={NotFound}/>
                </Switch>
            </Layout>
        </div>
    )
}

export default App;