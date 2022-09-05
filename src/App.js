import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components
import Homepage from "./components/Homepage"
import Menu from "./components/Menu";
//Pages
import Projects from "./pages/Projects"
import Error from "./pages/Error"
import Contacts from "./pages/Contacts";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Menu />
          <Homepage />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="contact-me">
          <Contacts />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
