import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './dashboard.css'
import reactDom from 'react-dom';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
// tất cả các phần tử render ra DOM đều là đối tượng react tạo ra

// const rootElement = document.getElementById('root');
// const myName= "Long";

// function Show(props) {
//   console.log(props.name);
//   return null;
// }
// reactDom.render(<Show name={myName} />, rootElement);