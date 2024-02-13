import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

//styles
import './App.css'

// Pages & Component
import Dashboard from "./pages/Dashboard/Dashboard"
import Create from "./pages/Create/Create"
import Login from "./pages/Login/Login"
import Project from "./pages/Project/Project"
import Signup from "./pages/Signup/Signup"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Dashboard />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/create" element={<Create />}/>
          <Route path="/projects:id" element={<Project />}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}
