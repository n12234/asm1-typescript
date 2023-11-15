import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import Homepage2 from "./pages/Homepage2";
import Layout from "./components/elements/Layout";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Homepage2 />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
          <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
