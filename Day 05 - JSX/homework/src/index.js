import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignInForm from './components/SignInForm';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<SignInForm />);