import HomePage from "./pages/home"
import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import ForgotPasswordPage from "./pages/forgot-password"
import ResetPasswordPage from "./pages/reset-password"
import ThemeProvider from "./theme"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App