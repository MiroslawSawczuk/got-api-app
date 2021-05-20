import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Characters from "./screens/characters";
import HouseDetails from "./screens/houseDetails";

const App = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Characters} />
        <Route path="/house-details/:id" component={HouseDetails} />
        {/* TODO Add Error route */}
      </Switch>
    </Router>
  );
};

export default App;
