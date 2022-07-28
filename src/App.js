import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Products from './Components/Products';
import Trends from './Components/Trends';
import Blog from './Components/Blog';
import About from './Components/About';
import Footer from './Components/Footer';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<><Navbar/><Homepage/><Footer/></>} />
        <Route path="/trends" element={<><Navbar/><Trends/><Footer/></>} />
        <Route path="/products" element={<><Navbar/><Products/><Footer/></>} />
        <Route path="/blog" element={<><Navbar/><Blog/><Footer/></>} />
        <Route path="/about" element={<><Navbar/><About/><Footer/></>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
