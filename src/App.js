import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart" component={Checkout} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
