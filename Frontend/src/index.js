import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './css/index.css';
import Homepage from './homepage';
import Years from './years';
import CenterDiv from './components/center_div';
import Button from './components/button';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const header_message = "btichhhhhhhhhhhhh";

const about_element = (
  <CenterDiv>
    <h3>{header_message}</h3>
    <Button message={"Home"} />
    <Button message={"About"} />
    <Button message={"HIHI"} />
  </CenterDiv>
)

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={about_element} />
        <Route path='/years' element={<Years />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
