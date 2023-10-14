import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ScrollToTop from "./components/ScrollToTop";

function App() {


  return (
    <>
      <Router>
      <ScrollToTop/>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
