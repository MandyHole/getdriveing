import logo from './logo.svg';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import HeroBox from './components/HeroBox';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <HeroBox />
    </div>
  );
}

export default App;