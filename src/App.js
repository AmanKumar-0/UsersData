import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Users from "./Users";
import UsersPost from './UsersPost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Users/>} />
      <Route exact path="/:userId/User" element={<UsersPost/>} />

       
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
