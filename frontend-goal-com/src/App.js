// App.js
import './Style.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Livescores from './components/LiveScores';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Betting from './pages/Betting';
import Blogs from './pages/Blogs';
import Competitions from './pages/Competitions';
import News from './pages/News';
import ListFavourite from './pages/ListFavourite';
import EditFavourite from './pages/EditFavourite';
import ViewFavourite from './pages/ViewFavourite';
import CreateFavourite from './pages/CreateFavourite';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
      <Route path="/" element= { <Home/> } />
      <Route path="/livescores" element= { <Livescores/> } />
      <Route path="/news" element= { <News/> } />
      <Route path="/betting" element= { <Betting/> } />
      <Route path="/blogs" element= { <Blogs/> } />
      <Route path="/competitions" element= { <Competitions/> } />
      <Route path="/listfavourite" element= { <ListFavourite/> } />
      <Route path="/editfavourite/:id" element= { <EditFavourite/> } />
      <Route path="/viewfavourite/:id" element= { <ViewFavourite/> } />
      <Route path="/createfavourite" element= { <CreateFavourite/> } />

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
