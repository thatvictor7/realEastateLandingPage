import './styling/App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar  from './components/navbar.jsx';
import Intro from './components/intro.jsx'

function App() {
  return (
    <div className="App flex-center">
      <Navbar />
      <Intro />
    </div>
  );
}

export default App;
