import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from 'react-router-dom';

export default function App(){
  const posts = [
    {
      id:1,
      title: 'My First Post',
      date: '4-7-22',
      content: 'This is my first post!'
    },
    {
      id:2,
      title: 'My First Post',
      date: '4-7-22',
      content: 'This is my first post!'
    },
    {
      id:3,
      title: 'My First Post',
      date: '4-7-22',
      content: 'This is my first post!'
    }
  ]
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

function Users() {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Routes>
        <Route path=":id" element={<UserProfile />} />
        <Route path="me" element={<OwnUserProfile />} />
      </Routes>
    </div>
  );
}