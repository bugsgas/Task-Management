import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//styles
import './App.css'

// Pages
import Dashboard from "./pages/Dashboard/Dashboard"
import Create from "./pages/Create/Create"
import Login from "./pages/Login/Login"
import Project from "./pages/Project/Project"
import Signup from "./pages/Signup/Signup"

//components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import OnlineUsers from "./components/OnlineUsers";

export default function App() {
  const {authIsReady, user} = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
      <BrowserRouter>
      {user && <Sidebar />}
      <div className="container">
      <Navbar />
        <Routes>
          <Route 
            exact path="/" 
            element={user ? <Dashboard /> : <Navigate to="/login" />} />
          <Route 
            path="/login" 
            element={!user ? <Login /> : <Navigate to="/" />} />
          <Route 
            path="/signup" 
            element={!user ? <Signup /> : <Navigate to="/" />} />
          <Route 
            path="/create" 
            element={user ? <Create /> : <Navigate to="/login" />} />
          <Route 
            path="/projects:id" 
            element={user ? <Project /> : <Navigate to="/login" />} />
          {/* <Route path="/create" element={<Create />}/>
          <Route path="/projects:id" element={<Project />}/> */}
        </Routes>
      </div>
      {user && <OnlineUsers />}
      </BrowserRouter>
      )}
    </div>
  );
}
