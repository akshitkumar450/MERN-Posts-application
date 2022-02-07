import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Form/Login";
import Signup from "./components/Form/Signup";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/posts">
          <Home />
        </Route>
        <Route path="/auth/login">
          <Login />
        </Route>
        <Route path="/auth/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
