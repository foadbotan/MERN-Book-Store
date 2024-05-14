import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import AuthPage from "./pages/AuthPage";
import { useState } from "react";
import "./styles.css";
import BookBrowse from "./components/BookBrowse";
import Navbar from "./components/Navbar";
import LoginForm from "./forms/LoginForm";
import Home from "./components/Home";
import help3 from '../public/help3.jpg'


// Updated import statement
// import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());

  console.log(user);

  return (
    <div className="white">
      {" "}
      {/* Use Tailwind CSS yellow-100 color */}
      <Router>
        <div>
          <Navbar />
          <div className="relative">
  <div className="flex-grow flex items-center justify-center bg-white px-10">
    <img src={help3} alt="Book Banner" className="w-full h-auto max-h-80" />
  </div>
  <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
    <p className="text-white text-2xl font-bold"></p>
  </div>
</div>


          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/allBooks" element={<BookBrowse />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
