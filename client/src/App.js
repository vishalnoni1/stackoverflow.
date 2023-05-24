
import './App.css';
import React from 'react'
import { useEffect } from 'react';
import Navbar from './components/navbar/navbar'
import{BrowserRouter as Router}from 'react-router-dom'
import AllRoutes from './components/AllRoutes'
import { fetchAllQuestions } from './actions/question';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from './actions/users';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])
  return (
      <div className="App">
 <Router >
        <Navbar />
        <AllRoutes />
      </Router >
      </div>
  );
}

export default App;
