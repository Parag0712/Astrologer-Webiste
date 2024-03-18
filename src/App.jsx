import React from 'react'
import { Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import Navbar from './components/Navbar/Navbar.jsx'

const Home = lazy(() => import("./pages/Home.jsx"))
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.jsx"))
const Products = lazy(() => import("./pages/Products.jsx"))
const Term_Condition = lazy(() => import("./pages/Term_Condition.jsx"))
const NotFound = lazy(() => import("./pages/NotFound.jsx"))
const Loader = lazy(() => import("./components/Loader.jsx"))
import './App.css'

function App() {
  return (
    <>
      <Router >
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/terms-and-conditions" element={<Term_Condition />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App