import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/index.css';
import Homepage from './homepage';
import Years from './years';
import Industries from './industry';
import View from './view';
import CenterDiv from './components/center_div';
import Button from './components/button';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const fetchYear = async () => {
  const response = await fetch('http://localhost:3011/api/by_year');
  const yeardata = await response.json();
  return yeardata;
};

const fetchIndustries = async () => {
  const response = await fetch('http://localhost:3011/api/by_industry');
  const industrydata = await response.json();
  return industrydata;
};

var yeardata = [];
var industrydata = [];

const fetchdata = async () => {
  yeardata = await fetchYear();
  industrydata = await fetchIndustries();
}

fetchdata()
  .then(() => {
    root.render(
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/years' element={<Years data={yeardata} />} />
            <Route path='/viewyear' element={<View data={yeardata} filter={'year'} />} />
            <Route path='/industries' element={<Industries data={industrydata} />} />
            <Route path='/viewindustry' element={<View data={industrydata} filter={'industry'}/>} />
          </Routes>
        </Router>
      </React.StrictMode>
    )
  })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

