import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './navbar'
import './style.css'
import img1 from './images/1.jpg'
import Udemy_cards from './udemy_cards'
import Udemy_rows from './udemy_rows';
import Footer from './footer';
const root = ReactDOM.createRoot(document.getElementById('root'))
function Toolbar() {
    return (
        <div class="toolbar">
            <a href="" class="a1">Development </a>
            <a href="" class="a2">Business</a>
            <a href="" class="a3">IT & Software</a>
            <a href="" class="a4">Personal Development</a>
            <a href="" class="a5">Design</a>
            <a href="" class="a6">Marketing</a>
        </div>
    )
}
function Udemy_photo() {
    return (
        <div class="Udemy__photo">
            <img src={img1} alt="" style={{ width: '100%' }}></img>
            <div class="box">
                <h3>Udemy Flash Sale 24 hours to save</h3>
                <p>Get thje top course for just $499 just one day to save but a lifetime to learn</p>
            </div>
        </div>
    )
}
function Top() {
    return (
        <div class="top">
            <p>Java Script</p>
            <p>Java</p>
            <p>AWS</p>
            <p>Pythopn</p>
            <p>React</p>
            <p>MangoDB</p>
            <p>SQL</p>
            <p>NodeJS</p>
            <p>ExpressJS</p>
        </div>
    )
}
root.render(
    <div>
        <Navbar></Navbar>
        {/* <h1>asu</h1> */}
        <Toolbar></Toolbar>
        <Udemy_photo></Udemy_photo>
        <Udemy_cards></Udemy_cards>
        <Udemy_rows></Udemy_rows>
        
        <Top></Top>
        <Footer></Footer>
        
    </div>
)
