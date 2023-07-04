import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import HeroBox from "./components/HeroBox";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />

      <Switch>
        {" "}
        <Route
          exact
          path="/"
          render={() => (
            <>
              {" "}
              <HeroBox />
              <h1>Homepage</h1>
            </>
          )}
        />
        <Route
          exact
          path="/tips"
          render={() => (
            <>
              {" "}
              <HeroBox />
              <h1>Tips</h1>
            </>
          )}
        />
        <Route
          exact
          path="/sign-in"
          render={() => (
            <>
              <HeroBox />
              <h1>Sign In</h1>
            </>
          )}
        />
        <Route
          exact
          path="/sign-up"
          render={() => (
            <>
              <HeroBox />
              <h1>Sign Up</h1>
            </>
          )}
        />
        <Route
          render={() => (
            <>
              <HeroBox />
              <h1>Page not found</h1>
            </>
          )}
        />
        <Route render={() => <p>Page not found!</p>} />
      </Switch>

      <Container></Container>
    </div>
  );
}

export default App;
