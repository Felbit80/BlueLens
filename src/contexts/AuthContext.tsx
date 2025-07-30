import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, LensRecommendation, ProtectionCalculation } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  addRecommendation: (recommendation: Omit<LensRecommendation, 'id' | 'userId' | 'createdAt'>) => void;
  addProtectionCalculation: (calculation: Omit<ProtectionCalculation, 'id' | 'userId' | 'createdAt'>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('bluelens-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    const users = JSON.parse(localStorage.getItem('bluelens-users') || '[]');
    const foundUser = users.find((u: any) => u.email === email && u.password === password);
    
    if (foundUser) {
      const userWithoutPassword = { ...foundUser };
      delete userWithoutPassword.password;
      setUser(userWithoutPassword);
      localStorage.setItem('bluelens-user', JSON.stringify(userWithoutPassword));
      return true;
    }
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    const users = JSON.parse(localStorage.getItem('bluelens-users') || '[]');
    
    if (users.find((u: any) => u.email === email)) {
      return false; // Email já existe
    }

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
      recommendations: [],
      protectionCalculations: []
    };

    users.push(newUser);
    localStorage.setItem('bluelens-users', JSON.stringify(users));

    const userWithoutPassword = { ...newUser };
    delete userWithoutPassword.password;
    setUser(userWithoutPassword);
    localStorage.setItem('bluelens-user', JSON.stringify(userWithoutPassword));
    
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('bluelens-user');
  };

  const addRecommendation = (recommendation: Omit<LensRecommendation, 'id' | 'userId' | 'createdAt'>) => {
    if (!user) return;

    const newRecommendation: LensRecommendation = {
      ...recommendation,
      id: Date.now().toString(),
      userId: user.id,
      createdAt: new Date()
    };

    const updatedUser = {
      ...user,
      recommendations: [...user.recommendations, newRecommendation]
    };

    setUser(updatedUser);
    localStorage.setItem('bluelens-user', JSON.stringify(updatedUser));
    
    // Update users array
    const users = JSON.parse(localStorage.getItem('bluelens-users') || '[]');
    const userIndex = users.findIndex((u: any) => u.id === user.id);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], recommendations: updatedUser.recommendations };
      localStorage.setItem('bluelens-users', JSON.stringify(users));
    }
  };

  const addProtectionCalculation = (calculation: Omit<ProtectionCalculation, 'id' | 'userId' | 'createdAt'>) => {
    if (!user) return;

    const newCalculation: ProtectionCalculation = {
      ...calculation,
      id: Date.now().toString(),
      userId: user.id,
      createdAt: new Date()
    };

    const updatedUser = {
      ...user,
      protectionCalculations: [...user.protectionCalculations, newCalculation]
    };

    setUser(updatedUser);
    localStorage.setItem('bluelens-user', JSON.stringify(updatedUser));
    
    // Update users array
    const users = JSON.parse(localStorage.getItem('bluelens-users') || '[]');
    const userIndex = users.findIndex((u: any) => u.id === user.id);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], protectionCalculations: updatedUser.protectionCalculations };
      localStorage.setItem('bluelens-users', JSON.stringify(users));
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      addRecommendation,
      addProtectionCalculation
    }}>
      {children}
    </AuthContext.Provider>
  );
};