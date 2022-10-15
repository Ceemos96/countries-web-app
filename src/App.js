import React from 'react';
import { Routes, Route } from 'react-router';
import './styles/App.css';
import Layout from './components/Layout/Layout';
import Countries from './components/Countries';
import Country from './components/CountriesComponents/Country';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Countries />} />
      <Route path="/countries" element={<Countries />} />
      <Route exact path="/countries/:name" element={<Country />} />
    </Route>
  </Routes>
);

export default App;
