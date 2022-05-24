import Navbar from './components/Navbar/Navbar'
import './App.css'
import Post from './Pages/Post/Post';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home'
import { Routes, Route, Navigate } from "react-router-dom";


function App() {

  const user = true

  return (
    <div className="App">
      <Navbar user={user} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/post/:id" element={user ? <Post /> : <Navigate to="/login" />} />
      </Routes>

    </div>
  );
}

export default App;
