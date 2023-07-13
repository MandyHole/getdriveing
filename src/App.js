import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import './api/axiosDefaults';
import SignUpPage from "./pages/auth/SignUpPage";
import SignInPage from "./pages/auth/SignInPage";
import MyProfilePage from "./pages/author/MyProfilePage";
import CreateTipForm from "./pages/tips/CreateTipForm";
import TipDetailPage from "./pages/tips/TipDetailPage";
import Footer from "./components/Footer";
import EditTipForm from "./pages/tips/EditTipForm";
import EditCommentForm from "./pages/comments/EditCommentForm";
import ScrollToTop from "./components/ScrollToTop";
import Homepage from "./pages/Homepage";
import EditProfileForm from "./pages/author/EditProfileForm";
import HeroComponent from "./components/HeroComponent";
import SavedTips from "./pages/tips/SavedTips";
import PageNotFound from "./components/PageNotFound";
import AuthorsTips from "./pages/author/AuthorsTips";


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <ScrollToTop>
      <Switch>
        {" "}
        <Route
          exact
          path="/"
          render={() => (
            <>
              {" "}
              <Homepage />
            </>
          )}
        />
        <Route
          exact
          path="/tips"
          render={() => (
            <>
       <HeroComponent />
              <h1>Tips</h1>
              
            </>
          )}
        />
        <Route
          exact
          path="/tips/create"
          render={() => (
            <>
              <CreateTipForm />
            </>
          )}
        />
<Route
            exact
            path="/saved"
            render={() => (
              <SavedTips />
            
            )}


            />

 <Route
          exact
          path="/tips/:id/edit"
          render={() => (
            <>
              <EditTipForm />
            </>
          )}
        />

<Route
          exact
          path="/comments/:id/edit"
          render={() => (
            <>
              <EditCommentForm />
            </>
          )}
        />


<Route
          exact
          path="/tips/:id"
          render={() => (
            <>
              <TipDetailPage />
            </>
          )}
        />

        
        <Route
          exact
          path="/sign-in"
          render={() => (
            <>
              <SignInPage />
            </>
          )}
        />
        <Route
          exact
          path="/sign-up"
          render={() => (
            <>
              <SignUpPage />
            </>
          )}
        />
        <Route
          exact
          path="/my-info"
          render={() => (
            <>
              <MyProfilePage />
            </>
          )}
        />
         <Route
          exact
          path="/authors/:id"
          render={() => (
            <>
              <AuthorsTips />
            </>
          )}
        />
        <Route
          exact
          path="/authors/:id/edit"
          render={() => (
            <>
              <EditProfileForm />
            </>
          )}
        />
 
        <Route
          render={() => (
            <>
              <PageNotFound />
            </>
          )}
        />
        <Route render={() => <p>Page not found!</p>} />
      </Switch>

      <Container></Container>
      <Footer />
      </ScrollToTop>
    </div>
  );
}

export default App;
