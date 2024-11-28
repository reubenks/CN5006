import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GreetingElement from './myGreetingApp';
import GreetingElementwithProp from './mygreetingprop';
import AppColor from './AppbackgroundColor';
import Lab from './labtask'
import Calculator from './SimpleCalculator'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < Calculator/>
    <Lab n1='1' n2='4'/>

    <GreetingElementwithProp msg = 'hi its mondeh init'/>
    <GreetingElementwithProp msg = 'hi its chewsday init'/>
    <GreetingElementwithProp msg = 'hi its wensdey init'/>
    <GreetingElementwithProp msg = 'hi its thersde init'/>
    <GreetingElementwithProp msg = 'hi its frighday init'/>
    <GreetingElementwithProp msg = 'hi its thaterday init'/>
    <GreetingElementwithProp msg = 'hi its thunsday init'/>

    <AppColor heading="This is first element" lbl="Name :"color="green"/>
    <AppColor heading="This is second element" lbl="Name :"color="blue"/>
    <AppColor heading="This is third third element" lbl="Name :"color="Yellow"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
