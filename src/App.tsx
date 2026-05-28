import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";

import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";

import HeroBackground from "./admin/HeroBackground";
import OfficeBearers from "./admin/OfficeBearers";
import AboutUs from "./admin/AboutUs";
import OurMemories from "./admin/OurMemories";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Public Website */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Admin Login */}
        <Route
          path="/admin"
          element={<Login />}
        />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Protected Admin Pages */}

        <Route
          path="/dashboard/hero-background"
          element={
            <ProtectedRoute>
              <HeroBackground />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/office-bearers"
          element={
            <ProtectedRoute>
              <OfficeBearers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/about-us"
          element={
            <ProtectedRoute>
              <AboutUs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/memories"
          element={
            <ProtectedRoute>
              <OurMemories />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;