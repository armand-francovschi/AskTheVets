import React, { createContext, useContext, useState } from "react";
// Create context
const AuthContext = createContext();

// Backend base URL
const API_BASE = "http://localhost:5000/api";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("currentUser");
    return storedUser
      ? JSON.parse(storedUser)
      : { role: "guest", name: "Guest" };
  });

  // 🔐 Login
  const login = async (email, password) => {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Login failed");

    const userData = {
      name: data.name,
      email: data.email,
      role: data.role,
      token: data.token,
    };

    setUser(userData);
    localStorage.setItem("currentUser", JSON.stringify(userData));
  };

  // 📝 Register
  const register = async (name, email, password) => {
    const res = await fetch(`${API_BASE}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Registration failed");

    // Optional: auto-login after registration
    await login(email, password);
  };

  // 🚪 Logout
  const logout = () => {
    setUser({ role: "guest", name: "Guest" });
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for cleaner usage
export const useAuth = () => useContext(AuthContext);
