import "./App.css";
import Homepage from "./pages/homepage";
import NewEntryForm from "./pages/newentryform";
import Browse from "./pages/browse";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/entry">New Entry</Link>
            </li>
            <li>
              <Link to="/browse">Browse</Link>
            </li>
          </ul>
        </nav>

        {/* A <Routes> component looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/entry" element={<NewEntryForm />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
