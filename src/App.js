import "./App.css";
import Form from './components/Form';
import { Switch, Route, NavLink, useParams} from "react-router-dom";
import Product from './components/Product';


function App() {
  return (
    <div className="App">
      {/* <nav>
        <Link to="/">Product</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <h1>Hello World</h1>

      <Switch>
        <Route path="/">
          <Product />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
     */}

     <Form/>


     <NavLink to="/product">Product</NavLink>
     <Route path="/product/:id">
        <Product />
     </Route>

    </div>
  );
}

export default App;
