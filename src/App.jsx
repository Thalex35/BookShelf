import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./composants/pages/HomePage";
import AboutPage from "./composants/pages/AboutPage";
import BookDetail from "./composants/pages/BookDetail";
import LoginPage from "./composants/pages/LoginPage";
import MyList from "./composants/pages/MyList";
import SignUp from "./composants/pages/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/book" element={<BookDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my-list" element={<MyList />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
