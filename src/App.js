import React from 'react';
import { Suspense} from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';
import CreateAccount from './pages/createaccount/CreateAccount';
import BookList from './components/BookList';
import BookDetails from './components/bookdatails/BookDetails';
import Favorites from './components/favorites/Favorites';
import Footer from './components/footer/Footer';
import Notfound from './components/NotFound';
import Header from './components/header/Header';
import Sale from './pages/sale/Sale';
import SearchApp from './components/search/SearchApp';



function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/home" element={<SearchApp />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        {/* id იქნება გვერდი, რომელიც აჩვენებს დეტალებს წიგნის შესახებ */}
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/header" element={<Header />} />
        <Route path="*" element={<Notfound />} />            
    </Routes>
 
    <Footer />
   </>

  );
}

export default App;
