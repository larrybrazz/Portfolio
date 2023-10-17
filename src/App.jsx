import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components.jsx/Header";
import Footer from "./Components.jsx/Footer";
import About from "./Components.jsx/Content/About";
import GetInTouch from "./Components.jsx/Content/GetInTouch";
import Portfolio from "./Components.jsx/Content/Portfolio";
import NotFound from "./Components.jsx/NotFound";
import Home from "./Components.jsx/Home";
import Blog from "./Components.jsx/Content/Blog";

function App() {
  return (
    <div className="bg-black">
      <div className="mb-12">
        <Header />
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<GetInTouch />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
