import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import authService from './appwrite/auth.js';
import { login, logout } from './store/authSlice.js';
import { Footer, Header } from './components/index.js';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-800 flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="bg-white shadow-md rounded-2xl p-6 min-h-[60vh]">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
