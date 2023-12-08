import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Fetchdata from "./Components/Fetchdata";
import Footer from "./Components/Footer";

function App() {
  return (
   <>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/News-react-app" element={<Home />}/>
          <Route path="/general" element={<Fetchdata Cat="general" />}/>
          <Route path="/business" element={<Fetchdata Cat="business" />}/>
          <Route path="/entertainment" element={<Fetchdata Cat="entertainment" />}/>
          <Route path="/health" element={<Fetchdata Cat="health" />}/>
          <Route path="/science" element={<Fetchdata Cat="science" />}/>
          <Route path="/sports" element={<Fetchdata Cat="sports" />}/>
          <Route path="/technology" element={<Fetchdata Cat="technology" />}/>
        </Routes>
      </Router>
      <Footer />
      
   </>
  );
}

export default App;
