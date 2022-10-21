import "./App.css";
import Homepage from "./components/homepage";
import NewEntryForm from "./components/newentryform";
import NewEntryButton from "./components/newentrybutton";
import Logo from "./components/logo";
import Browse from "./components/browse";
import WebFont from "webfontloader";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Bungee Shade", "Lexend Deca"],
      },
    });
  }, []);

  return (
    <div class="App">
      <Router>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo />
        </Link>
        <Link to="/browse">Browse</Link>

        {/* A <Routes> component looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div class="top-container">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/entry" element={<NewEntryForm />} />
            <Route path="/browse" element={<Browse />} />
          </Routes>
        </div>
        <Link to="/entry">
          <NewEntryButton />
        </Link>
      </Router>
    </div>
  );
}

export default App;
