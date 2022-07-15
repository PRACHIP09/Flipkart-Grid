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
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<><Navbar/><Homepage/></>} />
        <Route path="/trends" element={<><Navbar/><Trends/></>} />
        <Route path="/products" element={<><Navbar/><Products/></>} />
        <Route path="/blog" element={<><Navbar/><Blog/></>} />
        <Route path="/about" element={<><Navbar/><About/></>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
