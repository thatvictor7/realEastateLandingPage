import './styling/App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar  from './components/navbar.jsx'
import Intro from './components/intro.jsx'
import Gallery from './components/gallery.jsx'

function App() {
  return (
    <div className="App flex-center">
      <Navbar />
      <Intro />
      <Gallery />
    </div>
  );
}

export default App;
