import Checkout from "pages/Checkout";
import DetailsPage from "pages/DetailsPage";
import LandingPage from "pages/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/properties/:id" component={DetailsPage} />
        <Route exact path="/checkout" component={Checkout} />
      </Router>
    </div>
  );
}

export default App;
