import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Landing from './pages/landing'
import Layout from './components/Layout'
import Error404 from './pages/Error404'


function App() {
  return (
    <Router>
     <Routes>

       <Route path="/" element={
         <Layout>
          <Landing />
         </Layout>
        } 
       />

       <Route path="*" element={
          <Error404 />
        } 
       />



     </Routes>
    </Router>
  )
}

export default App;
