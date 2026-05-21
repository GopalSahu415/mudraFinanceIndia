import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("rupeeBridgeUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    const usersStr = localStorage.getItem("rupeeBridgeUsers");
    const users = usersStr ? JSON.parse(usersStr) : [];
    
    const foundUser = users.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      const userData = { name: foundUser.name, email: foundUser.email };
      setUser(userData);
      localStorage.setItem("rupeeBridgeUser", JSON.stringify(userData));
      toast.success("Login successful!");
      closeModals();
      
      // Execute any pending action after successful login
      if (pendingAction) {
        pendingAction();
        setPendingAction(null);
      }
      return true;
    } else {
      toast.error("Invalid email or password!");
      return false;
    }
  };

  const register = (name, email, password) => {
    const usersStr = localStorage.getItem("rupeeBridgeUsers");
    const users = usersStr ? JSON.parse(usersStr) : [];
    
    if (users.find(u => u.email === email)) {
      toast.error("Email is already registered!");
      return false;
    }
    
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("rupeeBridgeUsers", JSON.stringify(users));
    
    // Auto login
    const userData = { name, email };
    setUser(userData);
    localStorage.setItem("rupeeBridgeUser", JSON.stringify(userData));
    toast.success("Account created successfully!");
    closeModals();

    // Execute any pending action after successful registration
    if (pendingAction) {
      pendingAction();
      setPendingAction(null);
    }
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("rupeeBridgeUser");
    toast.success("Logged out successfully!");
  };

  const openLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  const openRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const closeModals = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    setPendingAction(null);
  };

  // requireAuth wrapper: if user logged in, run action. If not, open modal and save action.
  const requireAuth = (action) => {
    if (user) {
      action();
    } else {
      setPendingAction(() => action);
      openLogin();
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      isLoginOpen,
      isRegisterOpen,
      openLogin,
      openRegister,
      closeModals,
      requireAuth
    }}>
      {children}
    </AuthContext.Provider>
  );
};
