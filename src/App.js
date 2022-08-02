import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddForm from "./Components/AddForm";
import EditForm from "./Components/EditForm";
import Home from "./Components/Home/index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-user" element={<AddForm />} />
          <Route path="/edit-user/:userId" element={<EditForm />} />
          <Route path="*" element={<h3>404:PAGE NOT FOUND</h3>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
