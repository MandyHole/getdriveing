import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpPage from "./pages/auth/SignUpPage";
import SignInPage from "./pages/auth/SignInPage";
import MyProfilePage from "./pages/author/MyProfilePage";
import CreateTipForm from "./pages/tips/CreateTipForm";
import TipDetailPage from "./pages/tips/TipDetailPage";
import Footer from "./components/Footer";
import EditTipForm from "./pages/tips/EditTipForm";
import ScrollToTop from "./components/ScrollToTop";
import Homepage from "./pages/Homepage";
import EditProfileForm from "./pages/author/EditProfileForm";
import SavedTips from "./pages/tips/filtered/SavedTips";
import PageNotFound from "./pages/PageNotFound";
import AuthorsTips from "./pages/author/AuthorsTips";
import GoogleSlidesPage from "./pages/tips/filtered/GoogleSlidesPage";
import GoogleDocs from "./pages/tips/filtered/GoogleDocsPage";
import GoogleForms from "./pages/tips/filtered/GoogleFormsPage";
import GoogleSheets from "./pages/tips/filtered/GoogleSheetsPage";
import GoogleDrive from "./pages/tips/filtered/GoogleDrivePage";
import HighestRatedTips from "./pages/tips/filtered/HighestRatedTips";
import BeginnerPage from "./pages/tips/filtered/BeginnerPage";
import Intermediate from "./pages/tips/filtered/IntermediatePage";
import Advanced from "./pages/tips/filtered/AdvancedPage";

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
            path="/tips/create"
            render={() => (
              <>
                <CreateTipForm />
              </>
            )}
          />
          <Route exact path="/saved" render={() => <SavedTips />} />
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
            exact
            path="/highest"
            render={() => (
              <>
                <HighestRatedTips />
              </>
            )}
          />
          <Route
            exact
            path="/intermediate"
            render={() => (
              <>
                <Intermediate />
              </>
            )}
          />
          <Route
            exact
            path="/docs"
            render={() => (
              <>
                <GoogleDocs />
              </>
            )}
          />
          <Route
            exact
            path="/slides"
            render={() => (
              <>
                <GoogleSlidesPage />
              </>
            )}
          />
          <Route
            exact
            path="/forms"
            render={() => (
              <>
                <GoogleForms />
              </>
            )}
          />
          <Route
            exact
            path="/beginner"
            render={() => (
              <>
                <BeginnerPage />
              </>
            )}
          />
          <Route
            exact
            path="/sheets"
            render={() => (
              <>
                <GoogleSheets />
              </>
            )}
          />
          <Route
            exact
            path="/drive"
            render={() => (
              <>
                <GoogleDrive />
              </>
            )}
          />
          <Route
            exact
            path="/advanced"
            render={() => (
              <>
                <Advanced />
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
        </Switch>

        <Container></Container>
        <Footer />
      </ScrollToTop>
    </div>
  );
}

export default App;
