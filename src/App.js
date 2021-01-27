import './App.css';
import Layout from './containers/Layout/Layout';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import Products from './components/Products/Products';
import {Route} from 'react-router-dom';

function App() {
    return(
        <div>
            <Layout>
                <Route path="/about" component={About} />
                <Route path="/products" component={Products} />
                <Route path="/" exact component={Dashboard} />
            </Layout>
        </div>
    )
}

export default App;