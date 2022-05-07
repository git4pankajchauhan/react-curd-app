import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "../src/pages/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/User";
import Add from "./pages/User/Add";
import Edit from "./pages/User/Edit";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users/add" element={<Add />} />
        <Route path="/users/edit/:id" element={<Edit />} />
        <Route path="/users/:id" element={<User />} />
        {/* <Route element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
