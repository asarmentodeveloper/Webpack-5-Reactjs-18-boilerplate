import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Link} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
    <BrowserRouter>
        <nav className="px-10 border-b">
            <p><Link to="/" className="p-5">HOME</Link></p>
            <p><Link to="/about" className="p-5">ABOUT</Link></p>
        </nav>
        <App />
    </BrowserRouter>
);