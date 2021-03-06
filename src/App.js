import './styling/App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar  from './components/navbar.jsx'
import Intro from './components/intro.jsx'
import Gallery from './components/gallery.jsx'
import SecondGallery from './components/secondGallery.jsx'
import ArticleSection from './components/articlesSection.jsx'
import Contact from './components/contactSection.jsx'
import NavBottom from './components/navBottom.jsx';

function App() {
  return (
    <div className="App flex-center">
      <Navbar />
      <Intro />
      <Gallery />
      <SecondGallery />
      <ArticleSection />
      <Contact />
      <NavBottom />
    </div>
  );
}

export default App;
