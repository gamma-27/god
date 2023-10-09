import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Component from './component';
import reportWebVitals from './reportWebVitals';
// import ReactDOM from 'react-dom';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import RequestNow from '../src/pages/RequestNow'
import Drive from '../src/pages/drive'
import  Started from '../src/pages/get_started'
import GetStart from '../src/pages/getStarted2'
import Book from './pages/book';
  export default function App(){
    return(
      <BrowserRouter>
  <Routes>
  <Route exact path="/" element={<Component/>} />
      {/* <Route exact path="/requestnow" element={<RequestNow/>} /> */}
      <Route exact path="/requestnow" element={<Book/>} />
      <Route exact path="/drive" element={<Drive/>} />
      <Route exact path="/started" element={<Started/>} />
      <Route exact path="/getstarted" element={<GetStart/>} />
     
  </Routes>
  </BrowserRouter>
    )
  }
  

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
